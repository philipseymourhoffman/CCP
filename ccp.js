// ==UserScript==
// @name         cozy chat personalizer
// @namespace    cozytv_chat_color
// @version      1.0
// @description  Changes the chat color of specified users on CozyTV.
// @author       PhilipSeymourHoffman
// @match        https://cozy.tv/*
// @grant        none
// ==/UserScript==

// Welcome to the CCP!
// This script allows you to personalize the way your chat messages appear on your screen.
// To get started, simply add the usernames of the people you want to customize in the respective category, enclosed in quotes and separated by commas.
// You can also customize the color of the messages by changing the hexcode value in the 'targetColor' variable.
// Make sure to set the 'matchNameColor' variable to 'true' if you want the customized messages to appear in the same color as the username.
// Happy customizing!

(function() {
    'use strict';

    // Target Users: YOU
    // Enter your username here to change your color
    const targetUsers1 = ['YOURUSERNAMEHERE'];
    // Customize the color changing the hexcode to your preferred color
    const targetColor1 = '#ff007f';
    // Set to true if you want to change the color of your own chat messages.
    const matchNameColor1 = true;

    // Target Users: FRIEND LIST
    // Enter the usernames of your friends here to change their color.
    const targetUsers2 = ['FRIEND1', 'FRIEND2', 'FRIEND3'];
    // Customize the color changing the hexcode to your preferred color
    const targetColor2 = '#00FF00';
    // Set to true if you want to change the color of your friend's chat messages.
    const matchNameColor2 = true;

    // Target Users: MODWATCH
    // Enter the usernames of the users you need to keep an eye on
    const targetUsers4 = ['User1', 'User2', 'User3'];
    // Customize the color changing the hexcode to your preferred color
    const targetColor4 = '#FF0000';
    // Set to true if you want to change the color of the monitored users' chat messages.
    const matchNameColor4 = true;

    // Target Users: BLOCK LIST
    // Enter the usernames of the users you want blocked
    const targetUsers3 = ['BLOCK1', 'BLOCK2', 'BLOCK3', 'BLOCK4'];
    // This is blocked username color. Currently it's a darker blue but still visible. Change it to your taste or use #1d2233 to make it imperceptible
    const targetColor3 = '#1d4d75';
    // This makes the blocked users chat imperceptible to the eye. Can still be selected with the cursor if need of read
    const nonFriendColor = '#1d2233';
    // Keep False if you want messaged blocked. True will make message the same color as username
    const matchNameColor3 = false;



    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            const nodes = mutation.addedNodes;
            nodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    const nameSpan = node.querySelector('span.cursor-default.font-medium');
                    if (nameSpan) {
                        if (targetUsers1.includes(nameSpan.innerText)) {
                            nameSpan.style.color = targetColor1;
                            if (matchNameColor1) {
                                const messageSpan = node.querySelector('span.chat-message');
                                if (messageSpan) {
                                    messageSpan.style.color = targetColor1;
                                }
                            }
                        } else if (targetUsers2.includes(nameSpan.innerText)) {
                            nameSpan.style.color = targetColor2;
                            if (matchNameColor2) {
                                const messageSpan = node.querySelector('span.chat-message');
                                if (messageSpan) {
                                    messageSpan.style.color = targetColor2;
                                }
                            }
                        } else if (targetUsers3.includes(nameSpan.innerText)) {
                            nameSpan.style.color = targetColor3;
                            if (matchNameColor3) {
                                const messageSpan = node.querySelector('span.chat-message');
                                if (messageSpan) {
                                    messageSpan.style.color = targetColor3;
                                }
                            } else {
                                const nonFriendMessageSpan = node.querySelector('span.chat-message');
                                if (nonFriendMessageSpan) {
                                    nonFriendMessageSpan.style.color = nonFriendColor;
                                }
                            }
                        } else if (targetUsers4.includes(nameSpan.innerText)) {
                            nameSpan.style.color = targetColor4;
                            if (matchNameColor4) {
                                const messageSpan = node.querySelector('span.chat-message');
                                if (messageSpan) {
                                    messageSpan.style.color = targetColor4;
                                }
                            }
                        }
                    }
                }
            });
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();
