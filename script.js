document.addEventListener('DOMContentLoaded', function() {
    // Flip card functionality
    const flipCard = document.getElementById('flipCard');
    flipCard.addEventListener('click', function() {
        this.classList.toggle('flipped');
    });

    // Gallery functionality
    const galleryBtn = document.getElementById('gallery-btn');
    const backBtn = document.getElementById('back-btn');
    const memoryGallery = document.querySelector('.memory-gallery');
    const birthdayContainer = document.querySelector('.birthday-container');
    const memoryCardsContainer = document.querySelector('.memory-cards-container');
    const musicBtn = document.getElementById('music-btn');
    const birthdaySong = document.getElementById('birthday-song');
    const galleryMusic = document.getElementById('gallery-music');
    
    let isPlaying = false;
    let currentSong = birthdaySong;
    
    // Sample memories (replace with your own)
    const memories = [
        {
            type: 'image',
            src: 'assets/image/2nd.png',
            message: "Happy Birthday, pandu🐼! On this special day, I just want to remind you how much you mean to me. May your year ahead be as beautiful and amazing as your heart."
        },
        {
            type: 'video',
            src: 'assets/video/snap-1.mp4',
            poster: 'assets/video/poster-1.png',
            message: "I get lost in your eyes, and I never want to be found."
        },
        {
            type: 'image',
            src: 'assets/image/1st.png',
            message: "Somewhere on TikTok, you wore that dress — and I’ve been stuck in that moment ever since."
        },
        {
            type: 'video',
            src: 'assets/video/snap-2.mp4',
            poster: 'assets/video/poster-2.png',
            message: "Just wanna feel"
        },
        {
            type: 'image',
            src: 'assets/image/3rd.png',
            message: "Your Special day memories"
        },
        {
            type: 'image',
            src: 'assets/image/4th.png',
            message: "You look so preety pandu🐼."
        },
        {
            type: 'image',
            src: 'assets/image/5th.png',
            message: "Just wanna lost in your eyes but i can't."
        },
        {
            type: 'video',
            src: 'assets/video/snap-3.mp4',
            poster: 'assets/video/poster-3.png',
            message: "Laughing together"
        },
        {
            type: 'image',
            src: 'assets/image/6th.png',
            message: "In moments of silence, storms, or smiles — thank you for standing beside me."
        },
        {
            type: 'video',
            src: 'assets/video/snap-4.mp4',
            poster: 'assets/video/poster-4.png',
            message: "It was just a moment… but with you, it became unforgettable."
        },
        {
            type: 'image',
            src: 'assets/image/snap2.jpg',
            message: "With you, even the smallest moments feel like forever memories."
        },
        {
            type: 'video',
            src: 'assets/video/snap-5.mp4',
            poster: 'assets/video/poster-5.png',
            message: "No matter how far, my heart finds you like the tide finds the moon."
        },
        {
            type: 'image',
            src: 'assets/image/snap3.jpg',
            message: "One smile from you is enough to turn my worst day into peace."
        },
        {
            type: 'video',
            src: 'assets/video/snap-6.mp4',
            poster: 'assets/video/poster-6.png',
            message: "You're the calm in my chaos, the light in my dark, and the love in my soul"
        },
        {
            type: 'image',
            src: 'assets/image/rose.jpg',
            message: "Love isn’t measured by how long something lasts, but by how deeply it’s felt — like this rose, forever holding the weight of your heart."
        },
        {
            type: 'video',
            src: 'assets/video/snap-7.mp4',
            poster: 'assets/video/poster-7.png',
            message: "Your love doesn’t ask for perfection — it just holds me where I am, and somehow, that’s more than enough."
        },
        {
            type: 'video',
            src: 'assets/video/snap-8.mp4',
            poster: 'assets/video/poster-8.png',
            message: "Wishing you a day as lovely and amazing as you are. May laughter and love surround you always."
        },
        {
            type: 'video',
            src: 'assets/video/snap-9.mp4',
            poster: 'assets/video/poster-9.png',
            message: "The heart knows what the mind can’t understand"
        },
        {
            type: 'video',
            src: 'assets/video/las.mp4',
            poster: 'assets/video/poster-last.png',
            message: "That last time we met as lovers, time stood still—every glance, every touch whispered a silent goodbye.Though the moment was fleeting, it lives forever in my heart."
        },
        {
            type: 'image',
            src: 'assets/image/last.jpg',
            message: "Being with you isn’t just a chapter — it’s the whole story I never want to end."
        },
         {
            type: 'image',
            src: 'assets/image/pandu.png',
            message: "Happy Birthday pandu. I may not be a part of your life like before, but today, from a distance, I’m still silently wishing for your happiness. I hope your day is filled with real smiles, warm hearts, and dreams that come true. No matter where life takes us, you’ll always be someone I once prayed for. Stay blessed, stay beautiful. Happy Birthday, to the one who’ll always have a place in my story. 🎈"
        },

    ];
    
    // Create memory cards
    function createMemoryCards() {
        memoryCardsContainer.innerHTML = '';
        memories.forEach((memory, index) => {
            const memoryCard = document.createElement('div');
            memoryCard.className = 'memory-card';
            memoryCard.id = `memory-card-${index}`;
            
            const memoryCardInner = document.createElement('div');
            memoryCardInner.className = 'memory-card-inner';
            
            // Front of memory card (media)
            const memoryCardFront = document.createElement('div');
            memoryCardFront.className = 'memory-card-front';
            
            if (memory.type === 'image') {
                const img = document.createElement('img');
                img.src = memory.src;
                img.alt = 'Memory';
                img.className = 'memory-media';
                memoryCardFront.appendChild(img);
            } else if (memory.type === 'video') {
                const video = document.createElement('video');
                video.className = 'memory-media';
                video.controls = true;
                video.poster = memory.poster || 'assets/default-video-poster.jpg';
                
                const source = document.createElement('source');
                source.src = memory.src;
                source.type = 'video/mp4';
                
                video.appendChild(source);
                memoryCardFront.appendChild(video);
            }
            
            // Back of memory card (message)
            const memoryCardBack = document.createElement('div');
            memoryCardBack.className = 'memory-card-back';
            
            const floralBg = document.createElement('div');
            floralBg.className = 'floral-background';
            
            const memoryMsg = document.createElement('div');
            memoryMsg.className = 'memory-message';
            
            const heading = document.createElement('h3');
            heading.textContent = 'Memory';
            
            const paragraph = document.createElement('p');
            paragraph.textContent = memory.message;
            
            memoryMsg.appendChild(heading);
            memoryMsg.appendChild(paragraph);
            memoryCardBack.appendChild(floralBg);
            memoryCardBack.appendChild(memoryMsg);
            
            // Put it all together
            memoryCardInner.appendChild(memoryCardFront);
            memoryCardInner.appendChild(memoryCardBack);
            memoryCard.appendChild(memoryCardInner);
            memoryCardsContainer.appendChild(memoryCard);
            
            // Add click event to flip each card
            ['click','touchstart'].forEach(eventType => {
                memoryCard.addEventListener(eventType, function(e) {
                    e.preventDefault();
                    this.classList.toggle('flipped');
                })
            })
            
        });
    }
    

    
    // Show memory gallery
    galleryBtn.addEventListener('click', function() {
        createMemoryCards();
        birthdayContainer.style.display = 'none';
        memoryGallery.classList.remove('hidden');
        memoryGallery.classList.add('visible');
        
        if (isPlaying) {
            birthdaySong.pause();
            galleryMusic.play();
            currentSong = galleryMusic;
        }
    });
    
    // Back to birthday card
    backBtn.addEventListener('click', function() {
        memoryGallery.classList.remove('visible');
        memoryGallery.classList.add('hidden');
        birthdayContainer.style.display = 'flex';
        
        if (isPlaying) {
            galleryMusic.pause();
            birthdaySong.play();
            currentSong = birthdaySong;
        }
    });
    
    // Music control
    musicBtn.addEventListener('click', function() {
        if (isPlaying) {
            currentSong.pause();
            musicBtn.innerHTML = '<i class="fas fa-music"></i> Play Music';
        } else {
            currentSong.play();
            musicBtn.innerHTML = '<i class="fas fa-music"></i> Stop Music';
        }
        isPlaying = !isPlaying;
    });
    
    // Auto-play music on desktop
    document.body.addEventListener('click', function initMusic() {
        if (window.innerWidth > 768 && !isPlaying) {
            birthdaySong.play();
            musicBtn.innerHTML = '<i class="fas fa-music"></i> Stop Music';
            isPlaying = true;
        }
        document.body.removeEventListener('click', initMusic);
    }, { once: true });
});
