const netflixSound = document.getElementById('netflix-sound');
const clickSound = document.getElementById('click-sound');
const emotionalSong = document.getElementById('emotional-song');

// 1. Handle Intro Logic
window.onload = () => {
    // Play Netflix intro sound if possible (browsers often block auto-play)
    netflixSound.play().catch(() => console.log("Sound waiting for interaction"));

    setTimeout(() => {
        document.getElementById('intro-screen').classList.add('hidden');
        document.getElementById('profile-screen').classList.remove('hidden');
        document.body.style.overflow = 'auto';
    }, 2500);
};

// 2. Open Sections
function openSection(id) {
    clickSound.play();
    document.getElementById('profile-screen').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(s => s.classList.add('hidden'));
    
    // Show target
    document.getElementById(id).classList.remove('hidden');

    // Start music if it's the Meena Mam section
    if(id === 'meena-para') {
        emotionalSong.play();
    }
}

// 3. Back Logic
function closeSection() {
    clickSound.play();
    emotionalSong.pause();
    
    // Stop any playing videos
    document.querySelectorAll('video').forEach(v => {
        v.pause();
        v.currentTime = 0;
    });

    document.getElementById('main-content').classList.add('hidden');
    document.getElementById('profile-screen').classList.remove('hidden');
}
