"use client";

class AudioManager {
  private audioCache: Map<string, HTMLAudioElement> = new Map();
  private isEnabled: boolean = true;
  private currentAudio: HTMLAudioElement | null = null;

  constructor() {
    // Preload audio files
    this.preloadAudio();
  }

  private preloadAudio() {
    const audioFiles = [
      'correct.mp3',
      'incorrect.mp3',
      'finalanswer.mp3',
      'question15.mp3',
      'question510.mp3',
      'question1015.mp3',
      'correct-millionare.mp3'
    ];

    audioFiles.forEach(file => {

        const audio = typeof Audio !== "undefined" ? new Audio(`/${file}`) : null;
        if (audio) {
          audio.preload = 'auto';
          this.audioCache.set(file, audio);
        }
    });
  }

  private getQuestionAudio(questionIndex: number): string {
    if (questionIndex >= 0 && questionIndex <= 4) {
      return 'question15.mp3';
    } else if (questionIndex >= 5 && questionIndex <= 9) {
      return 'question510.mp3';
    } else {
      return 'question1015.mp3';
    }
  }

  private stopCurrentAudio() {
    if (this.currentAudio) {
      this.currentAudio.pause();
      this.currentAudio.currentTime = 0;
      this.currentAudio = null;
    }
  }

  public playCorrectAnswer(isFinalQuestion: boolean = false) {
    const audioFile = isFinalQuestion ? 'correct-millionare.mp3' : 'correct.mp3';
    this.playAudio(audioFile);
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
      // Stop any currently playing audio
      this.stopCurrentAudio();

      let audio = this.audioCache.get(filename);
      
      if (!audio) {
        audio = new Audio(`/${filename}`);
        this.audioCache.set(filename, audio);
      }

      // Reset audio to beginning and play
      audio.currentTime = 0;
      this.currentAudio = audio;
      
      audio.play().catch(error => {
        console.warn('Audio playback failed:', error);
        this.currentAudio = null;
      });

      // Clear current audio reference when it ends
      audio.onended = () => {
        if (this.currentAudio === audio) {
          this.currentAudio = null;
        }
      };
    } catch (error) {
      console.warn('Audio error:', error);
    }
  }

  public setEnabled(enabled: boolean) {
    this.isEnabled = enabled;
    if (!enabled) {
      this.stopCurrentAudio();
    }
  }

  public isAudioEnabled(): boolean {
    return this.isEnabled;
  }

  public stopAll() {
    this.stopCurrentAudio();
  }
}

// Create singleton instance
export const audioManager = new AudioManager();