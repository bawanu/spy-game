        const CATEGORIES = {
            "places": {
                label: "شوێن",
                icon: "fa-map-marker-alt",
                words: ["قوتابخانە", "نەخۆشخانە", "فڕۆکەخانە", "بازاڕ", "مزگەوت", "کتێبخانە", "سینەما", "پارک", "بەندیخانە", "ڕێستۆرانت", "هۆتێل", "دەریا", "دارستان", "شار", "گوند", "مۆزەخانە", "یاریگا", "قاوەخانە", "شاری یاری", "هۆڵی وەرزش", "زانکۆ", "بانک", "وێستگەی شەمەندەفەر", "شەقام", "ئەشکەوت", "بیابان", "کەنار دەریا", "باخچەی ئاژەڵان", "نانەواخانە", "سەرتاشخانە", "مەزرا", "کۆشک", "پرد", "تونێل", "بنزینخانە", "بنکەی پۆلیس", "بنکەی ئاگرکوژێنەوە", "مەلەوانگە", "چێشتخانە", "هۆڵی ئاهەنگ", "گۆڕەپان", "شاژەن", "کارگە", "تاقیگە", "خەستەخانە", "بەشە ناوخۆیی", "مۆڵ", "سوپەرمارکێت", "باخچەی ساوایان", "هەولێر", "سلێمانی", "دهۆک", "قەڵا", "سەیرانگا", "چیا"]
            },
            "objects": {
                label: "کەرەستە",
                icon: "fa-cube",
                words: ["مۆبایل", "لاپتۆپ", "کورسی", "قەڵەم", "ئاوێنە", "سەعات", "کتێب", "چەقۆ", "پەرداخ", "تەلەفزیۆن", "کامێرا", "کلیل", "چەکوش", "چرای سەرمێز", "پاتری", "سابون", "خاولی", "شەوت", "دەرمان", "پاکەت", "فڵچەی ددان", "شامپۆ", "سەرین", "بەتانی", "شانە", "مەقەست", "لکێنەر", "جزدان", "پێڵاو", "گۆرەوی", "کڵاو", "چەتر", "گوڵ", "ئەڵقە", "عەینەک", "گوێچکەگر", "مایکرۆفۆن", "گیتار", "پیانۆ", "تۆپ", "مێز", "دەرگا", "پەنجەرە", "سەیارە", "پاسکیل", "کوپ", "قاپ", "کەوچک", "چەتال", "جلشۆر", "فرن", "سەلاجە", "خەڵوز", "گوڵدان", "تەپڵەک", "کۆمپیوتەر", "تابلێت", "پێنوسی جاف", "رۆژمێر", "نەخشە", "ئاڵا"]
            },
            "food": {
                label: "خواردن",
                icon: "fa-hamburger",
                words: ["پیتزا", "کەباب", "مەنسەف", "یاپراخ", "برنج", "سێو", "هەنار", "قاوە", "شەربەت", "نان", "پەنیر", "ماست", "کێکی لەدایکبوون", "بەستەنی", "شوکۆلاتە", "ماکارۆنی", "شوتی", "سپێناخ", "ترێ", "هەمبەرگر", "پەتاتە", "شۆربا", "زەڵاتە", "گۆشت", "ماسی", "سوشی", "جپس", "چای", "شیر", "ئاو", "هێلکە", "هەنگوین", "مرەبا", "قەیسی", "فراولە", "مۆز", "لیمۆ", "خەیار", "تەماتە", "بیبەر", "کوولەکە", "دۆڵمە", "بریانی", "شفتە", "کفتە", "نیسک", "لۆبیا", "فاسۆلیا", "سەروپێ", "پاقلە", "شێلم", "چەرەزات", "کەرە", "هەنجیر", "کاڵەک", "قۆخ", "خوێ", "شەکر", "زەیتوون", "خورما", "کولێرە"]
            },
            "animals": {
                label: "گیانلەبەر",
                icon: "fa-cat",
                words: ["شێر", "پشیلە", "سەگ", "گورگ", "هەڵۆ", "کۆتر", "مار", "بزن", "مانگا", "ماسی", "توتی", "مێروولە", "پەپوولە", "بەراز", "کەرکەدەن", "فیل", "مامز", "کیسەڵ", "زەڕافە", "مەیمون", "کەنگەر", "پاندە", "ورچ", "پڵنگ", "کەروێشک", "مشک", "مریشک", "قاز", "ئەسپ", "کەر", "حوشتر", "بوق", "قرژاڵ", "پەنگوین", "دۆلفین", "نەهەنگ", "کووندەپەپوو", "رێوی", "سمۆرە", "داڵ", "مەل", "کەڵەشێر", "قەل", "زەنگەسوورە", "مێش", "هەنگ", "پشک", "مارمێلکە", "قرش", "ئەسپۆکە", "کرم", "تەیر", "باڵندە", "فلامینگۆ", "نەورس"]
            },
            "jobs": {
                label: "پیشەکان",
                icon: "fa-briefcase",
                words: ["پزیشک", "ئەندازیار", "مامۆستا", "فڕۆکەوان", "پۆلیس", "تەباخ", "نیگارکێش", "وەرزشەوان", "نووسەر", "گۆرانیبێژ", "ئارایشگەر", "شۆفێر", "پارێزەر", "وەستا", "جوتیار", "ئەکتەر", "سەرباز", "ئاگرکوژێنەوە", "پەرستار", "دکتۆری ددان", "فیتەر", "کارەباچی", "شوان", "ماسیگر", "پۆستەچی", "وێنەگر", "خەیات", "دارتاش", "کەشتیوان", "دادوەر", "ڕۆژنامەنووس", "دەرمانساز", "ژمێریار", "وەرگێڕ", "بەڕێوبەر", "کرێکار", "ناوەڕاست", "گۆڵچی", "سەرۆک", "وەزیر", "پەرلەمانتار", "شاعیر", "مۆسیقاژەن", "تەلارساز", "کاسب", "دوکاندار", "فیتەر"]
            },
            "custom": { label: "تایبەت", icon: "fa-pen-fancy", words: [] }
        };

        const PEER_CONFIG = {
            config: {
                iceServers: [
                    { urls: 'stun:stun.l.google.com:19302' },
                    { urls: 'stun:stun1.l.google.com:19302' },
                    { urls: 'stun:global.stun.twilio.com:3478' },
                    {
                        urls: "turn:openrelay.metered.ca:80",
                        username: "openrelayproject",
                        credential: "openrelayproject"
                    },
                    {
                        urls: "turn:openrelay.metered.ca:443",
                        username: "openrelayproject",
                        credential: "openrelayproject"
                    },
                    {
                        urls: "turn:openrelay.metered.ca:443?transport=tcp",
                        username: "openrelayproject",
                        credential: "openrelayproject"
                    }
                ],
                iceCandidatePoolSize: 0
            }
        };

        let heartbeatInterval = null;
        let lastPong = {};
        let audioMonitorInt = null;
        let state = {
            players: [],
            playerStatus: {},
            talkingStatus: {},
            numSpies: 1, gameTime: 5, maxGuesses: 1, guessesLeft: 1, manualGuessSet: false,
            selectedCats: new Set([]), isSoundOn: true,
            isHapticsOn: true,
            currentWord: '', assignments: [], activeSpies: 0, activeCitizens: 0, cardIndex: 0, timerRunning: false, timeLeft: 0, timerInt: null,
            isOnline: false,
            isHost: false,
            myName: "",
            myRole: null,
            flippedCount: 0,
            onlineVotes: {},
            mySelectedSuspect: null,
            isRoomLocked: false,
            gamePhase: 'LOBBY',
            peerMap: {}
        };

        let isChatOpen = false;
        let unreadCount = 0;
        let isMicOn = false;
        let localStream = null;
        let myBroadcastCalls = {}; // Track calls I started
        let incomingMediaCalls = {}; // Track calls started by others to me

        function startHostHeartbeat() {
            if(heartbeatInterval) clearInterval(heartbeatInterval);
            heartbeatInterval = setInterval(() => {
                if(!state.isOnline || !state.isHost) {
                    clearInterval(heartbeatInterval);
                    return;
                }
                
                // If the peer is disconnected from signaling server, try to reconnect
                if (peer && peer.disconnected) {
                    console.log("Peer signaling disconnected. Reconnecting...");
                    peer.reconnect();
                }

                broadcast({ type: 'PING' });
                const now = Date.now();
                let changed = false;
                state.players.forEach(p => {
                    if(p === state.myName) return;
                    const lastSeen = lastPong[p] || now;
                    const isActuallyOnline = (now - lastSeen) < 8000;
                    if(isActuallyOnline && state.playerStatus[p] !== 'online') {
                        state.playerStatus[p] = 'online';
                        changed = true;
                    } else if(!isActuallyOnline && state.playerStatus[p] !== 'offline') {
                        state.playerStatus[p] = 'offline';
                        changed = true;
                    }
                });
                if(changed) {
                    renderLobbyPlayers();
                    broadcast({ type: 'UPDATE_LOBBY', players: state.players, statuses: state.playerStatus, peerMap: buildPeerMap() });
                }
            }, 3000); // slowed from 2000ms — reduces unnecessary DOM re-renders
        }

        document.addEventListener("visibilitychange", () => {
            if (document.visibilityState === 'visible') {
                if (state.isOnline && !state.isHost) {
                    if (peer && peer.disconnected) {
                        peer.reconnect();
                    }
                    if (!myConn || !myConn.open) {
                        const code = sessionStorage.getItem('spy_room_code');
                        const name = sessionStorage.getItem('spy_name');
                        if (code && name) {
                             joinOnlineRoom(true);
                        }
                    }
                }
            }
        });

        const $ = (id) => document.getElementById(id);

        const transitionTo = (viewId) => {
            document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
            $(viewId).classList.add('active');
            playSfx('swish');
        };

        function showToast(message) {
            const container = $('toast-container');
            const toast = document.createElement('div');
            toast.className = 'toast-box';
            const icon = document.createElement('i');
            icon.className = 'fas fa-exclamation-circle toast-icon';
            const text = document.createElement('span');
            text.innerText = message;
            toast.appendChild(icon);
            toast.appendChild(text);
            container.appendChild(toast);
            playSfx('pop');
            triggerVibrate(200);
            setTimeout(() => {
                toast.classList.add('hiding');
                toast.addEventListener('animationend', () => toast.remove());
            }, 3000);
        }

        async function toggleMic() {
            if (!isMicOn) {
                try {
                    localStream = await navigator.mediaDevices.getUserMedia({
                        audio: {
                            echoCancellation: true,
                            noiseSuppression: true,
                            autoGainControl: true
                        }
                    });
                    isMicOn = true;
                    updateMicUI(true);
                    startAudioMonitoring(localStream);
                    callAllPeers();
                } catch (err) {
                    showToast("ڕێگەپێدانی مایکرۆفۆن پێویستە");
                }
            } else {
                stopMic();
            }
        }

        function callAllPeers() {
            if (!localStream) return;
            if (state.isHost) {
                // Host calls all connected clients
                hostConnections.forEach(conn => {
                    if (conn.peer) initiateBroadcastCall(conn.peer);
                });
            } else {
                // Client calls host
                if (myConn && myConn.peer) initiateBroadcastCall(myConn.peer);
                // Client also calls all other clients via peerMap
                if (state.peerMap) {
                    Object.entries(state.peerMap).forEach(([name, peerId]) => {
                        if (name !== state.myName && peerId !== (myConn && myConn.peer)) {
                            initiateBroadcastCall(peerId);
                        }
                    });
                }
            }
        }

        function stopMic() {
            if (localStream) {
                localStream.getTracks().forEach(track => track.stop());
                localStream = null;
            }
            if (audioMonitorInt) clearInterval(audioMonitorInt);
            isMicOn = false;
            updateMicUI(false);
            handleTalkingStatus(state.myName, false);
            broadcast({ type: 'TALKING_STATUS', sender: state.myName, status: false });
            
            Object.values(myBroadcastCalls).forEach(call => {
                if (call.open) call.close();
            });
            myBroadcastCalls = {};
        }

        function updateMicUI(on) {
            document.querySelectorAll('.mic-trigger i').forEach(icon => {
                icon.className = on ? "fas fa-microphone" : "fas fa-microphone-slash";
            });
            document.querySelectorAll('.mic-trigger').forEach(btn => {
                if(on) btn.classList.add('mic-on');
                else btn.classList.remove('mic-on');
            });
        }

        function startAudioMonitoring(stream) {
            try {
                const context = new (window.AudioContext || window.webkitAudioContext)();
                const source = context.createMediaStreamSource(stream);
                const analyser = context.createAnalyser();
                analyser.fftSize = 256;
                source.connect(analyser);
                const dataArray = new Uint8Array(analyser.frequencyBinCount);
                let lastStatus = false;
                let silenceCounter = 0;
                audioMonitorInt = setInterval(() => {
                    analyser.getByteFrequencyData(dataArray);
                    let sum = 0;
                    for(let i=0; i<dataArray.length; i++) sum += dataArray[i];
                    let average = sum / dataArray.length;
                    
                    let isTalking = false;
                    if(average > 25) {
                        isTalking = true;
                        silenceCounter = 0;
                    } else {
                        silenceCounter++;
                        if(silenceCounter < 5) {
                            isTalking = lastStatus;
                        } else {
                            isTalking = false;
                        }
                    }

                    if(isTalking !== lastStatus) {
                        lastStatus = isTalking;
                        handleTalkingStatus(state.myName, isTalking);
                        broadcast({ type: 'TALKING_STATUS', sender: state.myName, status: isTalking });
                    }
                }, 150);
            } catch(e) {}
        }

        function handleTalkingStatus(name, status) {
            state.talkingStatus[name] = status;
            renderLobbyPlayers();
            updateSuspectGlows();
        }

        function updateSuspectGlows() {
            document.querySelectorAll('.suspect-card').forEach(card => {
                const nameDiv = card.querySelector('div:last-child');
                if(!nameDiv) return;
                const name = nameDiv.innerText;
                if(state.talkingStatus[name]) card.classList.add('talking-indicator');
                else card.classList.remove('talking-indicator');
            });
        }

        function initiateBroadcastCall(peerId) {
            if (!localStream) return;
            // Prevent duplicate calls to the same peer (causes echo)
            if (myBroadcastCalls[peerId]) return;
            try {
                const call = peer.call(peerId, localStream);
                if (!call) return;
                myBroadcastCalls[peerId] = call;
                call.on('stream', (remoteStream) => {
                    attachRemoteAudio(call.peer, remoteStream);
                });
                call.on('close', () => {
                    removeRemoteAudio(peerId);
                    delete myBroadcastCalls[peerId];
                });
                call.on('error', () => {
                    removeRemoteAudio(peerId);
                    delete myBroadcastCalls[peerId];
                });
            } catch(e) {
                console.log('Call initiation failed:', e);
            }
        }

        function handleIncomingCall(call) {
            // Prevent duplicate incoming from same peer (causes echo)
            if (incomingMediaCalls[call.peer]) {
                try { incomingMediaCalls[call.peer].close(); } catch(e) {}
                removeRemoteAudio(call.peer);
            }
            incomingMediaCalls[call.peer] = call;
            // Answer with local stream if mic is on, otherwise receive-only
            if (localStream) {
                call.answer(localStream);
            } else {
                call.answer();
            }
            call.on('stream', (remoteStream) => {
                attachRemoteAudio(call.peer, remoteStream);
            });
            call.on('close', () => {
                removeRemoteAudio(call.peer);
                delete incomingMediaCalls[call.peer];
            });
            call.on('error', () => {
                removeRemoteAudio(call.peer);
                delete incomingMediaCalls[call.peer];
            });
        }

        function attachRemoteAudio(peerId, remoteStream) {
            // Don't play our own stream back to ourselves
            if (peer && peerId === peer.id) return;
            let audioId = `audio-${peerId}`;
            let audio = $(audioId);
            if (!audio) {
                audio = document.createElement('audio');
                audio.id = audioId;
                audio.autoplay = true;
                audio.playsInline = true;
                audio.setAttribute('playsinline', '');
                audio.style.display = 'none';
                $('remote-audio-container').appendChild(audio);
            }
            audio.srcObject = remoteStream;
            audio.play().catch(e => console.log('Audio play blocked until interaction'));
        }

        function removeRemoteAudio(peerId) {
            const audio = $(`audio-${peerId}`);
            if (audio) {
                audio.srcObject = null;
                audio.remove();
            }
        }

        function toggleChat() {
            isChatOpen = !isChatOpen;
            const drawer = $('chat-drawer');
            if (isChatOpen) {
                drawer.classList.add('open');
                unreadCount = 0;
                updateChatBadge();
                setTimeout(() => $('chat-input').focus(), 300);
            } else {
                drawer.classList.remove('open');
            }
        }

        function updateChatBadge() {
            document.querySelectorAll('.unread-badge').forEach(badge => {
                if (unreadCount > 0 && !isChatOpen) {
                    badge.innerText = unreadCount > 9 ? "9+" : unreadCount;
                    badge.style.display = 'grid';
                } else {
                    badge.style.display = 'none';
                }
            });
        }

        function addMessageToUI(sender, text, type) {
            const container = $('chat-messages');
            const msgDiv = document.createElement('div');
            msgDiv.className = `msg ${type}`;
            msgDiv.innerHTML = `
                <span class="msg-sender">${sender === state.myName ? 'تۆ' : sender}</span>
                <div class="msg-text">${text}</div>
            `;
            container.appendChild(msgDiv);
            container.scrollTop = container.scrollHeight;
            if (!isChatOpen && type === 'received') {
                unreadCount++;
                updateChatBadge();
                playSfx('pop');
            }
        }

        function sendChatMessage() {
            const input = $('chat-input');
            const text = input.value.trim();
            if (!text || !state.isOnline) return;
            const messageData = {
                type: 'CHAT',
                sender: state.myName,
                text: text
            };
            if (state.isHost) {
                addMessageToUI(state.myName, text, 'sent');
                broadcast(messageData);
            } else {
                if (myConn && myConn.open) {
                    myConn.send(messageData);
                    addMessageToUI(state.myName, text, 'sent');
                }
            }
            input.value = '';
        }

        $('chat-input').addEventListener('keydown', (e) => {
            if (e.key === 'Enter') sendChatMessage();
        });

        function startLocalMode() {
            state.isOnline = false;
            state.isHost = true;
            $('btn-exit').style.display = 'grid';
            $('btn-back-lobby').style.display = 'none';
            $('player-input-section').style.display = 'block';
            document.querySelectorAll('.chat-trigger').forEach(b => b.style.display = 'none');
            document.querySelectorAll('.mic-trigger').forEach(b => b.style.display = 'none');
            const savedPlayers = localStorage.getItem('spy_local_players');
            if (savedPlayers) {
                try {
                    state.players = JSON.parse(savedPlayers);
                } catch (e) {
                    state.players = [];
                }
            } else {
                state.players = [];
            }
            transitionTo('view-setup');
            renderTags();
        }

        function exitToMainMenu() {
            if(state.isOnline && state.isHost) {
                broadcast({ type: 'ROOM_CLOSED' });
                setTimeout(() => {
                    performExitCleanup();
                }, 1000);
            } else {
                performExitCleanup();
            }
        }

        function performExitCleanup() {
            if(heartbeatInterval) clearInterval(heartbeatInterval);
            heartbeatInterval = null;
            lastPong = {};
            if(peer) {
                peer.destroy();
                peer = null;
            }
            hostConnections = [];
            myConn = null;
            state.players = [];
            state.playerStatus = {};
            state.talkingStatus = {};
            state.isOnline = false;
            state.gamePhase = 'LOBBY';
            state.isRoomLocked = false;
            state.flippedCount = 0;
            $('player-input').value = '';
            $('my-name-input').value = '';
            $('room-code-input').value = '';
            $('chat-messages').innerHTML = '';
            unreadCount = 0;
            updateChatBadge();
            stopMic();
            $('remote-audio-container').innerHTML = '';
            clearSession();
            renderTags();
            transitionTo('view-mode');
        }

        let peer = null;
        let myConn = null;
        let hostConnections = [];
        let reconnectInterval = null;

        function createOnlineRoom(isRestore = false) {
            const name = $('my-name-input').value.trim();
            let customCode = $('room-code-input').value.trim();
            if(!name) return showToast("تکایە ناوەکەت بنووسە");
            if(!customCode) {
                customCode = Math.floor(1000 + Math.random() * 9000).toString();
                $('room-code-input').value = customCode;
            }
            state.myName = name;
            state.isOnline = true;
            state.isHost = true;
            if(!isRestore) {
                state.players = [name];
                state.playerStatus = { [name]: 'online' };
                state.gamePhase = 'LOBBY';
            }
            saveSession(true, name, customCode);
            if(peer) peer.destroy();
            peer = new Peer("bawan-spy-prod-" + customCode, PEER_CONFIG);
            peer.on('open', (id) => {
                $('display-room-code').innerText = customCode;
                state.playerStatus[state.myName] = 'online';
                document.querySelectorAll('.chat-trigger').forEach(b => b.style.display = 'grid');
                document.querySelectorAll('.mic-trigger').forEach(b => b.style.display = 'grid');
                if(isRestore) {
                    restoreHostGameState();
                    state.players.forEach(p => {
                        if(p !== state.myName) state.playerStatus[p] = 'offline';
                    });
                    renderLobbyPlayers();
                } else {
                    transitionTo('view-lobby-waiting');
                    saveHostGameState();
                }
                renderLobbyPlayers();
                $('host-controls').style.display = 'flex';
                $('client-wait-msg').style.display = 'none';
                updateLockBtnUI();
                if(isRestore) showToast("گەڕایتەوە بۆ ژوورەکەت");
                startHostHeartbeat();
            });
            peer.on('call', (call) => handleIncomingCall(call));
            peer.on('error', (err) => {
                if(err.type === 'unavailable-id') {
                    if(isRestore) {
                         setTimeout(() => createOnlineRoom(true), 1500);
                    } else {
                         showToast("ئەم کۆدە بەکارهاتووە");
                         clearSession();
                    }
                } else {
                    showToast("هەڵەی پەیوەندی: " + err.type);
                }
            });
            peer.on('connection', (conn) => {
                hostConnections.push(conn);
                conn.on('data', (data) => handleHostData(data, conn));
                conn.on('close', () => {
                    hostConnections = hostConnections.filter(c => c !== conn);
                    if(conn.playerName) {
                        state.playerStatus[conn.playerName] = 'offline';
                        broadcast({ type: 'UPDATE_LOBBY', players: state.players, statuses: state.playerStatus, peerMap: buildPeerMap() });
                        renderLobbyPlayers();
                    }
                });
            });
        }

        function toggleRoomLock() {
            state.isRoomLocked = !state.isRoomLocked;
            updateLockBtnUI();
            showToast(state.isRoomLocked ? "ژوورەکە داخرا" : "ژوورەکە کرایەوە");
            saveHostGameState();
        }

        function updateLockBtnUI() {
            const btn = $('btn-lock-room');
            if(state.isRoomLocked) {
                btn.className = "primary-btn success";
                btn.innerHTML = `<span>کردنەوەی ژوور</span> <i class="fas fa-lock-open"></i>`;
            } else {
                btn.className = "primary-btn danger";
                btn.innerHTML = `<span>داخستنی ژوور</span> <i class="fas fa-lock"></i>`;
            }
        }

        function joinOnlineRoom(isRestore = false) {
            const name = $('my-name-input').value.trim();
            const code = $('room-code-input').value.trim();
            if(!name || !code) return showToast("ناو و کۆد بنووسە");
            saveSession(false, name, code);
            state.myName = name;
            state.isOnline = true;
            state.isHost = false;
            
            showToast("پەیوەندی دەبەسترێت...");
            
            if(peer) peer.destroy();
            peer = new Peer(null, PEER_CONFIG);
            peer.on('open', (id) => {
                setTimeout(() => {
                    connectToHost(code, name, isRestore);
                }, 800);
            });
            peer.on('call', (call) => handleIncomingCall(call));
            peer.on('error', (err) => {
                if(err.type === 'peer-unavailable') {
                    showToast("ژوورەکە نەدۆزرایەوە (کۆدەکە هەڵەیە)");
                } else {
                    showToast("هەڵەیەک ڕوویدا: " + err.type);
                }
                clearSession();
                exitToMainMenu();
            });
        }

        function connectToHost(code, name, isRestore) {
            if(reconnectInterval) clearInterval(reconnectInterval);
            const conn = peer.connect("bawan-spy-prod-" + code, {
                reliable: true
            });
            conn.on('open', () => {
                myConn = conn;
                if(reconnectInterval) { clearInterval(reconnectInterval); reconnectInterval = null; }
                document.querySelectorAll('.chat-trigger').forEach(b => b.style.display = 'grid');
                document.querySelectorAll('.mic-trigger').forEach(b => b.style.display = 'grid');
                conn.send({ type: 'JOIN', name: name, isRejoining: isRestore });
                if(!document.querySelector('.view.active').id.includes('view-cards') &&
                   !document.querySelector('.view.active').id.includes('view-timer') &&
                   !document.querySelector('.view.active').id.includes('view-results')) {
                    transitionTo('view-lobby-waiting');
                }
                $('display-room-code').innerText = code;
                $('host-controls').style.display = 'none';
                $('client-wait-msg').style.display = 'block';
                $('client-wait-msg').innerText = "چاوەڕێی سێرڤەر بە یاریەکە دەستپێبکات...";
                if(isRestore) showToast("گەڕایتەوە ناو یاری");
            });
            conn.on('data', (data) => handleClientData(data));
            conn.on('close', () => {
                myConn = null;
                $('client-wait-msg').innerText = "پەیوەندی لەگەڵ سێرڤەر پچڕا. پەیوەندی دەبەستێتەوە...";
                showToast("پەیوەندی پچڕا! هەوڵدەدات پەیوەست بێتەوە...");
                if(!reconnectInterval) {
                    reconnectInterval = setInterval(() => {
                        connectToHost(code, name, true);
                    }, 2000);
                }
            });
        }

        function handleHostData(data, conn) {
            if (data.type === 'PONG') {
                if (conn.playerName) {
                    lastPong[conn.playerName] = Date.now();
                    if (state.playerStatus[conn.playerName] === 'offline') {
                        state.playerStatus[conn.playerName] = 'online';
                        renderLobbyPlayers();
                        broadcast({ type: 'UPDATE_LOBBY', players: state.players, statuses: state.playerStatus });
                    }
                }
                return;
            }
            if (conn.playerName) {
                lastPong[conn.playerName] = Date.now();
            }
            if (data.type === 'CHAT') {
                hostConnections.forEach(c => {
                    if (c !== conn) c.send(data);
                });
                addMessageToUI(data.sender, data.text, 'received');
            }
            else if (data.type === 'TALKING_STATUS') {
                handleTalkingStatus(data.sender, data.status);
                hostConnections.forEach(c => {
                    if (c !== conn) c.send(data);
                });
            }
            else if (data.type === 'JOIN') {
                let finalName = data.name;
                let counter = 1;
                if (!data.isRejoining || (data.isRejoining && !state.players.includes(data.name))) {
                    while(state.players.includes(finalName)) {
                         finalName = `${data.name}_${counter}`;
                         counter++;
                    }
                }
                if (finalName !== data.name) {
                    conn.send({ type: 'NAME_CHANGED', newName: finalName });
                }
                conn.playerName = finalName;
                state.playerStatus[finalName] = 'online';
                const isKnown = state.players.includes(finalName);
                if (state.isRoomLocked && !isKnown) {
                    conn.send({ type: 'ROOM_LOCKED_ERROR' });
                    setTimeout(() => conn.close(), 500);
                    return;
                }
                if (!isKnown) {
                    state.players.push(finalName);
                }
                saveHostGameState();
                renderLobbyPlayers();
                broadcast({ type: 'UPDATE_LOBBY', players: state.players, statuses: state.playerStatus, peerMap: buildPeerMap() });
                if (state.gamePhase !== 'LOBBY' && state.gamePhase !== 'SETUP') {
                    const playerObj = state.assignments.find(a => a.name === finalName);
                    if(playerObj) {
                        conn.send({
                            type: 'RESTORE_GAME',
                            phase: state.gamePhase,
                            roleObj: playerObj,
                            word: state.currentWord,
                            time: state.gameTime,
                            spiesCount: state.numSpies,
                            guesses: state.maxGuesses,
                            timeLeft: state.timeLeft,
                            players: state.players,
                            statuses: state.playerStatus,
                            assignments: state.assignments,
                            votes: state.onlineVotes
                        });
                    }
                }
            }
            else if (data.type === 'FLIPPED_BACK') {
                state.flippedCount++;
                if (state.flippedCount >= state.players.length) {
                    determineStarter();
                    const starter = $('starter-name-display').innerText;
                    broadcast({ type: 'SHOW_STARTER', starterName: starter });
                }
            }
            else if (data.type === 'LEAVE_GAME') {
                if (conn.playerName) {
                    state.playerStatus[conn.playerName] = 'offline';
                    saveHostGameState();
                    renderLobbyPlayers();
                    broadcast({ type: 'UPDATE_LOBBY', players: state.players, statuses: state.playerStatus, peerMap: buildPeerMap() });
                }
                conn.close();
            }
            else if (data.type === 'SUBMIT_VOTE') {
                if (!state.onlineVotes) state.onlineVotes = {};
                state.onlineVotes[data.voter] = data.suspect;
                saveHostGameState();
                const voteCount = Object.keys(state.onlineVotes).length;
                const totalPlayers = state.players.length;
                broadcast({ type: 'VOTE_PROGRESS', count: voteCount, total: totalPlayers });
                if (voteCount >= totalPlayers) {
                    processVotingResult();
                }
            }
        }

        function buildPeerMap() {
            const map = {};
            hostConnections.forEach(c => {
                if (c.playerName && c.peer) {
                    map[c.playerName] = c.peer;
                }
            });
            return map;
        }

        function handleClientData(data) {
            if(data.type === 'PING') {
                if(myConn && myConn.open) {
                    myConn.send({ type: 'PONG' });
                }
                return;
            }
            if (data.type === 'CHAT') {
                addMessageToUI(data.sender, data.text, 'received');
            }
            else if (data.type === 'TALKING_STATUS') {
                handleTalkingStatus(data.sender, data.status);
            }
            else if(data.type === 'NAME_CHANGED') {
                state.myName = data.newName;
                $('my-name-input').value = data.newName;
                saveSession(false, state.myName, $('room-code-input').value);
                showToast("ناوەکەت گۆڕدرا بۆ: " + data.newName + " (ناوی دووبارە)");
            }
            else if(data.type === 'UPDATE_LOBBY') {
                state.players = data.players;
                state.playerStatus = data.statuses || {};
                if(data.peerMap) state.peerMap = data.peerMap;
                renderLobbyPlayers();
                // If mic is on, call any new peers we don't have calls to yet
                if(isMicOn && localStream) callAllPeers();
            }
            else if(data.type === 'KICKED') {
                showToast("تۆ لە ژوورەک دەرکرایت");
                clearSession();
                setTimeout(() => performExitCleanup(), 1000);
            }
            else if(data.type === 'ROOM_LOCKED_ERROR') {
                showToast("ژوورەکە داخراوە!");
                clearSession();
                setTimeout(() => performExitCleanup(), 1000);
            }
            else if(data.type === 'START_GAME') {
                loadGameData(data);
                transitionTo('view-cards');
                updateOnlineCardView();
            }
            else if(data.type === 'RESTORE_GAME') {
                if(data.players) state.players = data.players;
                if(data.statuses) state.playerStatus = data.statuses;
                loadGameData(data);
                if(data.phase === 'CARDS') {
                    transitionTo('view-cards');
                    updateOnlineCardView();
                } else if (data.phase === 'TIMER') {
                    transitionTo('view-timer');
                    $('host-timer-controls').style.display = 'none';
                    $('client-timer-msg').style.display = 'block';
                    updateTimerDisplay(data.time * 60);
                } else if (data.phase === 'VOTING') {
                    initVotingPhase();
                    transitionTo('view-results');
                    const vCount = Object.keys(data.votes || {}).length;
                    $('voting-status').innerText = `دەنگدان... (${vCount} / ${state.players.length})`;
                }
            }
            else if(data.type === 'SHOW_STARTER') {
                $('starter-name-display').innerText = data.starterName;
                $('waiting-others-msg').style.display = 'none';
                transitionTo('view-starter');
                playSfx('victory');
            }
            else if(data.type === 'SYNC_TIMER') {
                state.timeLeft = data.timeLeft;
                state.timerRunning = data.running;
                if(!document.getElementById('view-timer').classList.contains('active')) {
                        transitionTo('view-timer');
                        $('host-timer-controls').style.display = 'none';
                        $('client-timer-msg').style.display = 'block';
                }
                updateTimerDisplay(data.totalTime);
            }
            else if(data.type === 'GAME_OVER') {
                    endGame();
            }
            else if(data.type === 'VOTE_PROGRESS') {
                $('voting-status').innerText = `دەنگدان... (${data.count} / ${data.total})`;
            }
            else if(data.type === 'VOTE_RESULT') {
                revealEverything(data.winner, data.assignments);
            }
            else if(data.type === 'RETURN_TO_LOBBY') {
                transitionTo('view-lobby-waiting');
                $('client-wait-msg').style.display = 'block';
            }
            else if(data.type === 'ROOM_CLOSED') {
                showToast("سێرڤەرەکە داخرا!");
                clearSession();
                setTimeout(() => performExitCleanup(), 1500);
            }
        }

        function loadGameData(data) {
            state.myRole = data.roleObj;
            state.gameTime = data.time;
            state.currentWord = data.word;
            state.numSpies = data.spiesCount;
            state.maxGuesses = data.guesses;
            state.timeLeft = data.timeLeft || (data.time * 60);
            state.assignments = data.assignments || [];
        }

        function broadcast(msg) {
            hostConnections.forEach(c => c.send(msg));
        }

        function renderLobbyPlayers() {
            const container = $('lobby-players-list');
            container.innerHTML = state.players.map((p, index) => {
                const isOnline = state.playerStatus[p] === 'online';
                const statusClass = isOnline ? 'status-online' : 'status-offline';
                const talkingClass = state.talkingStatus[p] ? 'talking-indicator' : '';
                let html = `<div class="tag ${talkingClass}">
                    <span class="status-dot ${statusClass}"></span>
                    ${p} ${p === state.myName ? '(تۆ)' : ''}`;
                if(state.isHost && p !== state.myName) {
                    html += `<div class="kick-btn" onclick="kickPlayer(${index})"><i class="fas fa-times"></i></div>`;
                }
                html += `</div>`;
                return html;
            }).join('');
        }

        function kickPlayer(index) {
            const playerToKick = state.players[index];
            if(!playerToKick) return;
            state.players.splice(index, 1);
            delete state.playerStatus[playerToKick];
            const connIdx = hostConnections.findIndex(c => c.playerName === playerToKick);
            if(connIdx !== -1) {
                hostConnections[connIdx].send({ type: 'KICKED' });
                hostConnections.splice(connIdx, 1);
            }
            renderLobbyPlayers();
            broadcast({ type: 'UPDATE_LOBBY', players: state.players, statuses: state.playerStatus, peerMap: buildPeerMap() });
            saveHostGameState();
        }

        function setupOnlineGame() {
            state.gamePhase = 'SETUP';
            saveHostGameState();
            transitionTo('view-setup');
            $('btn-exit').style.display = 'none';
            $('btn-back-lobby').style.display = 'grid';
            $('player-input-section').style.display = 'none';
            renderTags();
            broadcast({ type: 'SETUP_GAME' });
        }

        function backToLobby() {
            state.gamePhase = 'LOBBY';
            saveHostGameState();
            transitionTo('view-lobby-waiting');
        }

        function resetGameToLobby() {
            if(state.isOnline) {
                if(state.isHost) {
                    broadcast({ type: 'RETURN_TO_LOBBY' });
                    state.gamePhase = 'LOBBY';
                    saveHostGameState();
                    transitionTo('view-lobby-waiting');
                    state.flippedCount = 0;
                    state.onlineVotes = {};
                }
            } else {
                transitionTo('view-setup');
            }
        }

        const setupGrid = () => {
            const grid = $('topics-container');
            grid.innerHTML = '';
            for (const [key, cat] of Object.entries(CATEGORIES)) {
                const div = document.createElement('div');
                div.className = `topic-card`;
                div.innerHTML = `<i class="fas ${cat.icon}"></i><div class="topic-name">${cat.label}</div>`;
                div.onclick = () => toggleTopic(key, div);
                grid.appendChild(div);
            }
        };
        setupGrid();

        function toggleTopic(key, el) {
            if (state.selectedCats.has(key)) {
                state.selectedCats.delete(key);
                el.classList.remove('selected');
            } else {
                state.selectedCats.add(key);
                el.classList.add('selected');
            }
            if (key === 'custom') {
                const container = $('custom-words-container');
                container.style.display = state.selectedCats.has('custom') ? 'block' : 'none';
                if(state.selectedCats.has('custom')) setTimeout(() => container.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
            }
            playSfx('click');
        }

        function addPlayer() {
            const input = $('player-input');
            const name = input.value.trim();
            if(name && !state.players.includes(name)) {
                state.players.push(name);
                if(!state.isOnline) {
                    localStorage.setItem('spy_local_players', JSON.stringify(state.players));
                }
                renderTags();
                input.value = '';
                playSfx('pop');
            }
        }

        function renderTags() {
            const c = $('players-container');
            const showX = !state.isOnline;
            c.innerHTML = state.players.map((p,i) =>
                `<div class="tag">${p} ${showX ? `<i class="fas fa-times" onclick="removePlayer(${i})"></i>` : ''}</div>`
            ).join('');
            const spyLimit = Math.max(1, Math.floor(state.players.length / 2));
            if(parseInt($('spy-count').innerText) > spyLimit) $('spy-count').innerText = spyLimit;
        }

        function removePlayer(i) {
            state.players.splice(i, 1);
            if(!state.isOnline) {
                localStorage.setItem('spy_local_players', JSON.stringify(state.players));
            }
            renderTags();
        }

        function adjVal(id, amount) {
            if(state.isOnline && !state.isHost) return;
            const el = $(id);
            let val = parseInt(el.innerText);
            if(id === 'spy-count') {
                const max = Math.max(1, Math.floor(state.players.length / 2)) || 1;
                val += amount;
                if(val < 1) val = 1; if(val > max && state.players.length > 2) val = max;
                state.numSpies = val;
            } else if (id === 'guess-count') {
                state.manualGuessSet = true;
                val += amount;
                if(val < 1) val = 1; if(val > 10) val = 10;
                state.maxGuesses = val;
            } else {
                val += amount;
                if(val < 1) val = 1; if(val > 60) val = 60;
                state.gameTime = val;
            }
            el.innerText = val;
            playSfx('click');
        }

        function initGame() {
            if (state.players.length < 3) { showToast("لانی کەم دەبێت ٣ یاریزان هەبن"); return; }
            if (state.selectedCats.size === 0) { showToast("تکایە لانی کەم بابەتێک هەڵبژێرە"); return; }
            if (state.isOnline && state.isHost) {
                const offlinePlayers = state.players.filter(p => p !== state.myName && state.playerStatus[p] !== 'online');
                if (offlinePlayers.length > 0) {
                    showToast("هەموو یاریزانەکان دەبێت ئۆنڵاین بن! (" + offlinePlayers.join(", ") + " ئۆفلاینە)");
                    return;
                }
            }
            if(audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
            state.numSpies = parseInt($('spy-count').innerText);
            state.maxGuesses = parseInt($('guess-count').innerText);
            let pool = [];
            state.selectedCats.forEach(catKey => {
                if(catKey === 'custom') {
                    const rawText = $('custom-words-input').value;
                    const customWords = rawText.split(/[\n,،]+/).map(w => w.trim()).filter(w => w.length > 0);
                    if(customWords.length > 0) pool = pool.concat(customWords);
                } else if(CATEGORIES[catKey]) {
                    pool = pool.concat(CATEGORIES[catKey].words);
                }
            });
            if(pool.length === 0) { showToast("هەڵەیەک ڕوویدا"); return; }
            state.currentWord = pool[Math.floor(Math.random() * pool.length)];
            let roles = Array(state.numSpies).fill('spy').concat(Array(state.players.length - state.numSpies).fill('citizen'));
            roles.sort(() => Math.random() - 0.5);
            let shuffledPlayers = [...state.players].sort(() => Math.random() - 0.5);
            state.assignments = shuffledPlayers.map((p, i) => ({ name: p, role: roles[i], id: i }));
            state.gamePhase = 'CARDS';
            isFlipped = false;
            isAnimating = false;
            $('the-card').style.pointerEvents = 'all';
            if (state.isOnline) {
                state.flippedCount = 0;
                state.onlineVotes = {};
                const hostObj = state.assignments.find(a => a.name === state.myName);
                state.myRole = hostObj;
                hostConnections.forEach(conn => {
                    const playerObj = state.assignments.find(a => a.name === conn.playerName);
                    if(playerObj) {
                        conn.send({
                            type: 'START_GAME',
                            roleObj: playerObj,
                            time: state.gameTime,
                            word: state.currentWord,
                            spiesCount: state.numSpies,
                            guesses: state.maxGuesses
                        });
                    }
                });
                saveHostGameState();
                $('current-player-name').innerText = state.myName;
                $('card-instruction').innerText = "کارتەکەت ببینە";
                transitionTo('view-cards');
                updateOnlineCardView();
            } else {
                state.cardIndex = 0;
                showCardScreen();
            }
        }

        let isFlipped = false;
        let isAnimating = false;

        function showCardScreen() { transitionTo('view-cards'); updateCardView(); }

        function updateCardView() {
            const card = $('the-card');
            card.classList.remove('flipped');
            card.style.pointerEvents = 'all';
            isFlipped = false;
            isAnimating = false;
            setTimeout(() => {
                const player = state.assignments[state.cardIndex];
                $('current-player-name').innerText = player.name;
                applyRoleToCard(player.role === 'spy');
            }, 200);
        }

        function updateOnlineCardView() {
            const card = $('the-card');
            card.classList.remove('flipped');
            card.style.pointerEvents = 'all';
            isFlipped = false;
            isAnimating = false;
            applyRoleToCard(state.myRole.role === 'spy');
        }

        function applyRoleToCard(isSpy) {
            if (isSpy) {
                $('card-back').className = `card-face face-back spy-mode`;
                $('card-role').innerText = "نـهێـنـی";
                $('card-word').innerText = "تۆ سیخوڕیت!";
                $('card-desc').innerText = "خۆت وەکو هاوڵاتی دەربخە. هەوڵبدە لە قسەی ئەوانی ترەوە وشەکە بزانیت.";
            } else {
                $('card-back').className = `card-face face-back`;
                $('card-role').innerText = "تۆ هاوڵاتییت";
                $('card-word').innerText = state.currentWord;
                $('card-desc').innerText = "سیخوڕەکە لە ناوتاندایە. وریا بە لە کاتی پرسیارکردن.";
            }
        }

        function flipCard() {
            if(isAnimating) return;
            isAnimating = true;
            const card = $('the-card');
            if(!isFlipped) {
                playSfx('flip');
                card.classList.add('flipped');
                isFlipped = true;
                triggerVibrate(50);
                setTimeout(() => isAnimating = false, 600);
            } else {
                playSfx('flip');
                card.classList.remove('flipped');
                isFlipped = false;
                setTimeout(() => {
                    isAnimating = false;
                    if (state.isOnline) {
                        $('the-card').style.pointerEvents = 'none';
                        $('waiting-others-msg').style.display = 'block';
                        if(state.isHost) {
                            state.flippedCount++;
                            if(state.flippedCount >= state.players.length) {
                                determineStarter();
                                broadcast({ type: 'SHOW_STARTER', starterName: $('starter-name-display').innerText });
                            }
                        } else {
                            myConn.send({ type: 'FLIPPED_BACK' });
                        }
                    } else {
                        setTimeout(() => {
                            state.cardIndex++;
                            if(state.cardIndex >= state.assignments.length) determineStarter();
                            else updateCardView();
                        }, 200);
                    }
                }, 600);
            }
        }

        function determineStarter() {
            const pool = state.assignments;
            const randomStarter =  pool[Math.floor(Math.random() * pool.length)];
            $('starter-name-display').innerText = randomStarter.name;
            transitionTo('view-starter');
            playSfx('victory');
        }

        function startTimerView() {
            if(state.isOnline && !state.isHost) {
                return;
            }
            state.gamePhase = 'TIMER';
            if(state.isOnline) saveHostGameState();
            transitionTo('view-timer');
            startTimer(state.gameTime * 60);
        }

        function startTimer(seconds) {
            state.timeLeft = seconds;
            const totalTime = state.gameTime * 60;
            updateTimerDisplay(totalTime);
            clearInterval(state.timerInt);
            state.timerRunning = true;
            $('pause-icon').className = "fas fa-pause";
            if(state.isOnline && !state.isHost) {
                $('host-timer-controls').style.display = 'none';
                $('client-timer-msg').style.display = 'block';
            } else {
                $('host-timer-controls').style.display = 'flex';
                $('client-timer-msg').style.display = 'none';
            }
            if(!state.isOnline || state.isHost) {
                state.timerInt = setInterval(() => {
                    if(!state.timerRunning) return;
                    state.timeLeft--;
                    if(state.isOnline && state.isHost) {
                        broadcast({ type: 'SYNC_TIMER', timeLeft: state.timeLeft, running: true, totalTime: totalTime });
                    }
                    updateTimerDisplay(totalTime);
                    if(state.timeLeft <= 0) { clearInterval(state.timerInt); endGame(); }
                }, 1000);
            }
        }

        function updateTimerDisplay(total) {
            const m = Math.floor(state.timeLeft / 60).toString().padStart(2, '0');
            const s = (state.timeLeft % 60).toString().padStart(2, '0');
            $('timer-val').innerText = `${m}:${s}`;
            const pct = ((total - state.timeLeft) / total) * 100;
            $('timer-ring').style.setProperty('--progress', `${pct}%`);
            if(state.timeLeft <= 10 && state.timeLeft > 0) playSfx('tick');
        }

        function togglePause() {
            if(state.isOnline && !state.isHost) return;
            state.timerRunning = !state.timerRunning;
            $('pause-icon').className = state.timerRunning ? "fas fa-pause" : "fas fa-play";
            playSfx('click');
            if(state.isOnline) {
                broadcast({ type: 'SYNC_TIMER', timeLeft: state.timeLeft, running: state.timerRunning, totalTime: state.gameTime * 60 });
            }
        }

        function endGame() {
            clearInterval(state.timerInt);
            try { playSfx('alarm'); triggerVibrate([200, 100, 200, 100, 500]); } catch(e){}
            if(state.isOnline && state.isHost) broadcast({ type: 'GAME_OVER' });
            initVotingPhase();
            transitionTo('view-results');
        }

        function initVotingPhase() {
            state.gamePhase = 'VOTING';
            if(state.isHost) saveHostGameState();
            $('phase-voting').style.display = 'flex';
            $('phase-post-reveal').style.display = 'none';
            $('voting-status').className = 'status-box';
            state.mySelectedSuspect = null;
            if(state.isOnline) {
                $('attempts-display').style.display = 'none';
                $('voting-status').innerText = "تکایە هەمووان دەنگ بدەن";
                $('btn-confirm-vote').style.display = 'flex';
                $('btn-confirm-vote').disabled = true;
                $('btn-confirm-vote').innerText = "ناردنی دەنگ";
                $('btn-reveal-all').style.display = 'none';
                $('client-reveal-msg').style.display = 'none';
                if(state.isHost) $('btn-force-end').style.display = 'flex';
            } else {
                state.guessesLeft = state.maxGuesses;
                $('attempts-display').style.display = 'flex';
                $('attempts-count').innerText = state.guessesLeft;
                state.activeSpies = state.numSpies;
                state.activeCitizens = state.players.length - state.numSpies;
                $('voting-status').innerText = "تکایە گومانلێکراو هەڵبژێرە";
                $('btn-confirm-vote').style.display = 'none';
                $('btn-force-end').style.display = 'none';
                $('btn-reveal-all').style.display = 'block';
            }
            const grid = $('suspects-grid');
            grid.innerHTML = '';
            state.players.forEach(playerName => {
                const btn = document.createElement('div');
                btn.className = 'suspect-card';
                btn.id = `suspect-${playerName}`;
                btn.innerHTML = `<i class="fas fa-user"></i><div>${playerName}</div>`;
                if(state.isOnline) {
                    btn.onclick = () => selectSuspectOnline(playerName, btn);
                } else {
                    const localPlayerObj = state.assignments.find(p => p.name === playerName);
                    btn.onclick = () => checkSuspectLocal(localPlayerObj, btn);
                }
                grid.appendChild(btn);
            });
            updateSuspectGlows();
        }

        function selectSuspectOnline(suspectName, btnElement) {
            document.querySelectorAll('.suspect-card').forEach(el => el.classList.remove('selected-vote'));
            btnElement.classList.add('selected-vote');
            state.mySelectedSuspect = suspectName;
            const btn = $('btn-confirm-vote');
            btn.disabled = false;
            btn.classList.add('pulse');
            playSfx('click');
        }

        function confirmVote() {
            if(!state.mySelectedSuspect) return;
            $('btn-confirm-vote').innerText = "چاوەڕوانی ئەوانیت...";
            $('btn-confirm-vote').disabled = true;
            document.querySelectorAll('.suspect-card').forEach(el => el.style.pointerEvents = 'none');
            const myVoteData = { type: 'SUBMIT_VOTE', suspect: state.mySelectedSuspect, voter: state.myName };
            if(state.isHost) {
                if(!state.onlineVotes) state.onlineVotes = {};
                state.onlineVotes[state.myName] = state.mySelectedSuspect;
                saveHostGameState();
                checkVoteCompletion();
            } else {
                myConn.send(myVoteData);
            }
        }

        function checkVoteCompletion() {
            const voteCount = Object.keys(state.onlineVotes).length;
            const totalPlayers = state.players.length;
            broadcast({ type: 'VOTE_PROGRESS', count: voteCount, total: totalPlayers });
            $('voting-status').innerText = `دەنگدان... (${voteCount} / ${totalPlayers})`;
            if(voteCount >= totalPlayers) setTimeout(processVotingResult, 1000);
        }

        function hostSkipVoting() {
            if(!state.isOnline || !state.isHost) return;
            const resultData = { type: 'VOTE_RESULT', victim: null, isSpy: false, winner: 'neutral', assignments: state.assignments };
            broadcast(resultData);
            revealEverything('neutral', state.assignments);
        }

        function processVotingResult() {
            const counts = {};
            Object.values(state.onlineVotes).forEach(suspect => { counts[suspect] = (counts[suspect] || 0) + 1; });
            let victim = null; let maxVotes = -1;
            for(const [suspect, count] of Object.entries(counts)) {
                if(count > maxVotes) { maxVotes = count; victim = suspect; }
            }
            const victimObj = state.assignments.find(p => p.name === victim);
            let winner = 'spies';
            let isSpy = false;
            if(victimObj && victimObj.role === 'spy') {
                isSpy = true;
                winner = 'citizens';
            }
            const resultData = { type: 'VOTE_RESULT', victim: victim, isSpy: isSpy, winner: winner, assignments: state.assignments };
            revealEverything(winner, state.assignments);
            broadcast(resultData);
        }

        function checkSuspectLocal(player, btnElement) {
            const statusBox = $('voting-status');
            if(btnElement.classList.contains('caught') || btnElement.classList.contains('eliminated')) return;
            state.guessesLeft--;
            $('attempts-count').innerText = state.guessesLeft;
            if (player.role === 'spy') {
                playSfx('victory'); triggerVibrate(200);
                state.activeSpies--;
                btnElement.classList.add('caught');
                btnElement.innerHTML = `<i class="fas fa-check"></i><div>${player.name}</div>`;
                statusBox.className = 'status-box success';
                statusBox.innerText = `ئافەرین! ${player.name} سیخوڕ بوو!`;
                if (state.activeSpies === 0) setTimeout(() => revealEverything('citizens'), 1000);
            } else {
                playSfx('pop'); triggerVibrate(50);
                state.activeCitizens--;
                btnElement.classList.add('eliminated');
                statusBox.className = 'status-box error';
                statusBox.innerText = `${player.name} بێتاوانە! سیخوڕ نییە.`;
            }
            if (state.guessesLeft <= 0 && state.activeSpies > 0) setTimeout(() => revealEverything('spies'), 1000);
        }

        function revealEverything(winner, assignmentsList = null) {
            const currentAssignments = assignmentsList || state.assignments;
            const winDisplay = $('winner-display');
            winDisplay.innerHTML = '';
            if (winner === 'citizens') {
                winDisplay.className = "winner-header winner-citizens";
                winDisplay.innerHTML = `<i class="fas fa-trophy"></i><h1>هاوڵاتیان بردیانەوە!</h1>`;
                playSfx('victory');
            } else if (winner === 'spies') {
                winDisplay.className = "winner-header winner-spies";
                winDisplay.innerHTML = `<i class="fas fa-user-secret"></i><h1>سیخوڕەکان بردیانەوە!</h1>`;
                playSfx('alarm');
            } else {
                winDisplay.className = "winner-header";
                winDisplay.innerHTML = `<i class="fas fa-flag-checkered"></i><h1>ئەنجامەکان</h1>`;
            }
            $('result-word').innerText = state.currentWord || "Error";
            const spies = currentAssignments.filter(a => a.role === 'spy');
            $('spies-list').innerHTML = spies.map(s =>
                `<div class="spy-reveal"><span style="font-weight:bold; color:white">${s.name}</span> <i class="fas fa-user-secret"></i></div>`
            ).join('');
            $('phase-voting').style.display = 'none';
            $('phase-post-reveal').style.display = 'flex';
            $('phase-post-reveal').classList.add('active');
        }

        function toggleSound() {
            state.isSoundOn = !state.isSoundOn;
            $('btn-sound').style.opacity = state.isSoundOn?1:0.5;
            $('btn-sound').innerHTML=state.isSoundOn?'<i class="fas fa-volume-up"></i>':'<i class="fas fa-volume-mute"></i>';
        }

        function toggleHaptics() {
            state.isHapticsOn = !state.isHapticsOn;
            $('btn-haptics').style.opacity = state.isHapticsOn ? 1 : 0.5;
            $('btn-haptics').innerHTML = state.isHapticsOn ? '<i class="fas fa-mobile-alt"></i>' : '<i class="fas fa-ban"></i>';
            if(state.isHapticsOn) triggerVibrate(50);
        }

        function toggleHelp() {
            const m=$('help-modal');
            if(m.style.display==='flex'){
                m.classList.remove('open');
                setTimeout(()=>m.style.display='none',300)
            }else{
                m.style.display='flex';
                requestAnimationFrame(()=>m.classList.add('open'));
            }
        }

        // Lazy AudioContext — created on first use instead of at page load
        let audioCtx = null;
        let noiseBuffer = null;

        function getAudioCtx() {
            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                noiseBuffer = createNoiseBuffer();
            }
            return audioCtx;
        }

        function createNoiseBuffer() {
            const ctx = audioCtx;
            const bufferSize = ctx.sampleRate * 2;
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const output = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) { output[i] = Math.random() * 2 - 1; }
            return buffer;
        }

        function playTone(freq, type, duration, vol=0.1) {
            const ctx = getAudioCtx();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, ctx.currentTime);
            gain.gain.setValueAtTime(vol, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + duration);
        }

        function playSfx(type) {
            if(!state.isSoundOn) return;
            const ctx = getAudioCtx();
            if(ctx.state === 'suspended') ctx.resume();
            const now = ctx.currentTime;
            if(type === 'click') { playTone(800, 'sine', 0.1, 0.05); }
            else if(type === 'pop') {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.frequency.setValueAtTime(400, now);
                osc.frequency.exponentialRampToValueAtTime(100, now + 0.1);
                gain.gain.setValueAtTime(0.1, now);
                gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
                osc.connect(gain); gain.connect(ctx.destination);
                osc.start(); osc.stop(now + 0.1);
            }
            else if(type === 'swish') {
                const source = ctx.createBufferSource();
                source.buffer = noiseBuffer;
                const filter = ctx.createBiquadFilter();
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(600, now);
                filter.frequency.linearRampToValueAtTime(100, now + 0.3);
                const gain = ctx.createGain();
                gain.gain.setValueAtTime(0.05, now);
                gain.gain.linearRampToValueAtTime(0, now + 0.3);
                source.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
                source.start(); source.stop(now + 0.3);
            }
            else if(type === 'flip') { playTone(300, 'triangle', 0.15, 0.05); }
            else if(type === 'tick') {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(1200, now);
                gain.gain.setValueAtTime(0.05, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
                osc.connect(gain); gain.connect(ctx.destination);
                osc.start(); osc.stop(now + 0.05);
            }
            else if(type === 'victory') { [523.25, 659.25, 783.99, 1046.50].forEach((f, i) => { setTimeout(() => playTone(f, 'triangle', 0.6, 0.05), i * 80); }); }
            else if(type === 'alarm') {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(523.25, now);
                osc.frequency.exponentialRampToValueAtTime(520, now + 0.5);
                gain.gain.setValueAtTime(0, now);
                gain.gain.linearRampToValueAtTime(0.15, now + 0.02);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
                osc.connect(gain);
                gain.connect(ctx.destination);
                osc.start();
                osc.stop(now + 0.6);
            }
        }

        function triggerVibrate(pattern) { if (state.isHapticsOn && navigator.vibrate) navigator.vibrate(pattern); }

        // Particles — reduced from 20 to 8 and made slower for lower GPU/CPU load
        const pC=$('particles');
        for(let i=0;i<8;i++){
            const p=document.createElement('div');
            p.className='particle';
            p.style.cssText = `left:${Math.random()*100}%; width:${Math.random()*4+2}px; height:${Math.random()*4+2}px; animation-duration:${Math.random()*15+20}s; animation-delay:${Math.random()*10}s;`;
            pC.appendChild(p);
        }

        function saveSession(isHost, name, code) {
            sessionStorage.setItem('spy_is_host', isHost);
            sessionStorage.setItem('spy_name', name);
            sessionStorage.setItem('spy_room_code', code);
        }

        function saveHostGameState() {
            if(!state.isHost) return;
            const gameState = {
                players: state.players,
                playerStatus: state.playerStatus,
                phase: state.gamePhase,
                currentWord: state.currentWord,
                assignments: state.assignments,
                gameTime: state.gameTime,
                numSpies: state.numSpies,
                maxGuesses: state.maxGuesses,
                timeLeft: state.timeLeft,
                isRoomLocked: state.isRoomLocked,
                flippedCount: state.flippedCount,
                onlineVotes: state.onlineVotes
            };
            sessionStorage.setItem('spy_host_state', JSON.stringify(gameState));
        }

        function restoreHostGameState() {
            const saved = sessionStorage.getItem('spy_host_state');
            if(saved) {
                const d = JSON.parse(saved);
                state.players = d.players || [];
                state.playerStatus = d.playerStatus || {};
                state.gamePhase = d.phase || 'LOBBY';
                state.currentWord = d.currentWord;
                state.assignments = d.assignments || [];
                state.gameTime = d.gameTime;
                state.numSpies = d.numSpies;
                state.maxGuesses = d.maxGuesses;
                state.timeLeft = d.timeLeft;
                state.isRoomLocked = d.isRoomLocked || false;
                state.flippedCount = d.flippedCount || 0;
                state.onlineVotes = d.onlineVotes || {};
                if(state.gamePhase === 'CARDS') {
                    $('current-player-name').innerText = state.myName;
                    state.myRole = state.assignments.find(a => a.name === state.myName);
                    transitionTo('view-cards');
                    updateOnlineCardView();
                } else if(state.gamePhase === 'TIMER') {
                    transitionTo('view-timer');
                    startTimer(state.timeLeft);
                } else if(state.gamePhase === 'VOTING') {
                    initVotingPhase();
                    transitionTo('view-results');
                    checkVoteCompletion();
                } else if(state.gamePhase === 'SETUP') {
                    transitionTo('view-setup');
                    $('btn-exit').style.display = 'none';
                    $('btn-back-lobby').style.display = 'grid';
                    $('player-input-section').style.display = 'none';
                    renderTags();
                } else {
                    transitionTo('view-lobby-waiting');
                    $('host-controls').style.display = 'flex';
                    $('client-wait-msg').style.display = 'none';
                }
            }
        }

        function clearSession() {
            sessionStorage.removeItem('spy_is_host');
            sessionStorage.removeItem('spy_name');
            sessionStorage.removeItem('spy_room_code');
            sessionStorage.removeItem('spy_host_state');
        }

        function checkRestoreSession() {
            const code = sessionStorage.getItem('spy_room_code');
            const name = sessionStorage.getItem('spy_name');
            const isHost = sessionStorage.getItem('spy_is_host') === 'true';
            if (code && name) {
                $('my-name-input').value = name;
                $('room-code-input').value = code;
                if (isHost) createOnlineRoom(true);
                else joinOnlineRoom(true);
            }
        }

        $('player-input').addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                addPlayer();
            }
        });

        window.addEventListener('load', checkRestoreSession);

        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('./service-worker.js')
                    .then(reg => console.log('SW Registered!', reg.scope))
                    .catch(err => console.log('SW Failed:', err));
            });
        }

        window.addEventListener('beforeunload', () => {
            if (state.isOnline) {
                if (peer) {
                    if (!state.isHost && myConn) {
                        myConn.send({ type: 'LEAVE_GAME' });
                    }
                    peer.destroy();
                }
            }
        });

        function universalLeave() {
            if (confirm("دڵنیای دەوێت لە ژوورەکە بچیتە دەرەوە؟")) {
                clearSession();
                if (state.isOnline) {
                    if (state.isHost) {
                        broadcast({ type: 'ROOM_CLOSED' });
                    } else {
                        if (myConn) {
                            myConn.send({ type: 'LEAVE_GAME' });
                        }
                    }
                }
                if(peer) peer.destroy();
                setTimeout(() => {
                    window.location.href = window.location.pathname;
                }, 300);
            }
        }

        let deferredPrompt;

        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            const installBtn = document.getElementById('install-app-btn');
            const installDivider = document.getElementById('install-divider');
            if (installBtn) installBtn.style.display = 'flex';
            if (installDivider) installDivider.style.display = 'block';
        });

        async function installApp() {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                if (outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                } else {
                    console.log('User dismissed the install prompt');
                }
                deferredPrompt = null;
                const installBtn = document.getElementById('install-app-btn');
                const installDivider = document.getElementById('install-divider');
                if (installBtn) installBtn.style.display = 'none';
                if (installDivider) installDivider.style.display = 'none';
            }
        }
