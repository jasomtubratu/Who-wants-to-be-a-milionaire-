"use client";

class AudioManager {
  private audioCache: Map<string, HTMLAudioElement> = new Map();
  private isEnabled: boolean = true;

  constructor() {
    // Preload audio files
    this.preloadAudio();
  }

  private preloadAudio() {
    const audioFiles = [
      'correct.mp3',
      'incorrect.mp3',
      'finalanswer.mp3',
      'question[1-5].mp3',
      'question[5-10].mp3',
      'question[10-15].mp3'
    ];

    audioFiles.forEach(file => {
      const audio = new Audio(`/${file}`);
      audio.preload = 'auto';
      this.audioCache.set(file, audio);
    });
  }

  private getQuestionAudio(questionIndex: number): string {
    if (questionIndex >= 0 && questionIndex <= 4) {
      return 'question[1-5].mp3';
    } else if (questionIndex >= 5 && questionIndex <= 9) {
      return 'question[5-10].mp3';
    } else {
      return 'question[10-15].mp3';
    }
  }

  public playCorrectAnswer() {
    this.playAudio('correct.mp3');
  }

  public playIncorrectAnswer() {
    this.playAudio('incorrect.mp3');
  }

  public playFinalAnswer() {
    this.playAudio('finalanswer.mp3');
  }

  public playQuestionReveal(questionIndex: number) {
    const audioFile = this.getQuestionAudio(questionIndex);
    this.playAudio(audioFile);
  }

  private playAudio(filename: string) {
    if (!this.isEnabled) return;

    try {
      let audio = this.audioCache.get(filename);
      
      if (!audio) {
        audio = new Audio(`/assets/${filename}`);
        this.audioCache.set(filename, audio);
      }

      // Reset audio to beginning and play
      audio.currentTime = 0;
      audio.play().catch(error => {
        console.warn('Audio playback failed:', error);
      });
    } catch (error) {
      console.warn('Audio error:', error);
    }
  }

  public setEnabled(enabled: boolean) {
    this.isEnabled = enabled;
  }

  public isAudioEnabled(): boolean {
    return this.isEnabled;
  }
}

// Create singleton instance
export const audioManager = new AudioManager();