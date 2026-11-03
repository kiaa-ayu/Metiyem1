// Web Audio API Synthesizer for Authentic Nusantara Ambience & Instrument Previews

class EthnicAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlayingAmbient = false;
    this.ambientGain = null;
    this.ambientNodes = [];
    this.analyser = null;
    this.dataArray = null;
    this.ambientInterval = null;
    this.masterGain = null;
    this.volume = 0.7;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 64;
      this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
      this.masterGain.connect(this.analyser);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setTargetAtTime(this.volume, this.ctx.currentTime, 0.05);
    }
  }

  // Play a specific instrument resonant tone
  playInstrumentTone(freq = 440, type = 'genta', duration = 3.0) {
    this.init();
    const now = this.ctx.currentTime;

    if (type === 'bell-genta' || type === 'genta') {
      // Bell/Genta: Fundamental + high harmonic partials with long exponential decay
      const harmonics = [1, 2.76, 5.4, 8.93];
      const gains = [0.6, 0.3, 0.15, 0.08];

      harmonics.forEach((h, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq * h, now);

        gain.gain.setValueAtTime(gains[idx] * 0.7, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + duration + idx * 0.5);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(now);
        osc.stop(now + duration + idx * 0.5);
      });
    } else if (type === 'plucked-high' || type === 'sape-strum' || type === 'siter-twang' || type === 'gambus-lute') {
      // Plucked string (Karplus-Strong style approximation via filtered sawtooth/triangle)
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(freq * 4, now);
      filter.frequency.exponentialRampToValueAtTime(freq * 0.8, now + duration * 0.8);

      gain.gain.setValueAtTime(0.8, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + duration);
    } else if (type === 'suling-breath' || type === 'reed-piercing') {
      // Breathy flute with gentle vibrato LFO
      const osc = this.ctx.createOscillator();
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      lfo.frequency.setValueAtTime(5.5, now); // vibrato rate
      lfoGain.gain.setValueAtTime(6.0, now); // vibrato depth
      lfo.connect(osc.frequency);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.5, now + 0.15); // soft attack
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      lfo.start(now);
      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + duration);
      lfo.stop(now + duration);
    } else if (type === 'drum-gandrang' || type === 'drum-rapai' || type === 'bass-sub') {
      // Resonant drum pulse
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq * 2.2, now);
      osc.frequency.exponentialRampToValueAtTime(freq, now + 0.1);

      gain.gain.setValueAtTime(1.0, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + Math.min(duration, 1.2));

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + Math.min(duration, 1.2));
    } else {
      // Default warm harmonic chime
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.5, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + duration);
    }
  }

  // Toggle background atmospheric ambience
  toggleAmbient(onStateChange) {
    this.init();
    if (this.isPlayingAmbient) {
      this.stopAmbient();
      if (onStateChange) onStateChange(false);
      return false;
    } else {
      this.startAmbient();
      if (onStateChange) onStateChange(true);
      return true;
    }
  }

  startAmbient() {
    this.init();
    if (this.isPlayingAmbient) return;
    this.isPlayingAmbient = true;

    // Ambient Drone (Low D & A warmth)
    const baseFreqs = [73.42, 110.00, 146.83, 220.00]; // D2, A2, D3, A3
    this.ambientGain = this.ctx.createGain();
    this.ambientGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    this.ambientGain.gain.linearRampToValueAtTime(0.25, this.ctx.currentTime + 3);
    this.ambientGain.connect(this.masterGain);

    this.ambientNodes = [];
    baseFreqs.forEach(freq => {
      const osc = this.ctx.createOscillator();
      const nodeGain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      nodeGain.gain.setValueAtTime(0.12, this.ctx.currentTime);

      osc.connect(nodeGain);
      nodeGain.connect(this.ambientGain);
      osc.start();
      this.ambientNodes.push(osc);
    });

    // Meditative pentatonic notes played gently periodically:
    // Pelog/Slendro inspired pentatonic frequencies
    const pentatonicNotes = [293.66, 329.63, 370.00, 440.00, 493.88, 587.33, 659.25, 740.00];

    this.ambientInterval = setInterval(() => {
      if (!this.isPlayingAmbient || !this.ctx) return;
      const note = pentatonicNotes[Math.floor(Math.random() * pentatonicNotes.length)];
      const types = ['bell-genta', 'sape-strum', 'suling-breath', 'siter-twang'];
      const chosenType = types[Math.floor(Math.random() * types.length)];
      this.playInstrumentTone(note, chosenType, 4.0);
    }, 2800);
  }

  stopAmbient() {
    this.isPlayingAmbient = false;
    if (this.ambientInterval) {
      clearInterval(this.ambientInterval);
      this.ambientInterval = null;
    }
    if (this.ambientGain && this.ctx) {
      this.ambientGain.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 1.5);
      setTimeout(() => {
        this.ambientNodes.forEach(node => {
          try { node.stop(); node.disconnect(); } catch (e) {}
        });
        this.ambientNodes = [];
      }, 1600);
    }
  }

  getFrequencyData() {
    if (!this.analyser || !this.dataArray) return new Uint8Array(16);
    this.analyser.getByteFrequencyData(this.dataArray);
    return this.dataArray.slice(0, 16);
  }
}

export const audioEngine = new EthnicAudioEngine();

