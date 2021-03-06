'use strict';
window.onload = function() {
    var currSection = document.querySelector("section");
    var total_section = document.getElementsByTagName('section').length
    var section_num = 1;
    var currElement = undefined;
    var prevSection = undefined;
    var is_selected = 0;
    var nested_links = [];
    var synth = window.speechSynthesis;
    currSection.className += "active";
    var utterThis = new SpeechSynthesisUtterance("You are at the header of the webpage");
    synth.speak(utterThis);

    document.addEventListener('keydown', function(event) {
        const keyName = event.key;
        event.preventDefault();

        function speakAloud(text_to_speak) {
            synth.cancel();
            var utterThis = new SpeechSynthesisUtterance(text_to_speak);
            synth.speak(utterThis);
        }

        function speak_for_buttons() {
            if (currElement.getAttribute("title") == null) {
                var link_name = currElement.querySelector("img").getAttribute("title");
            } else {
                link_name = currElement.getAttribute("title");
            }
            speakAloud(link_name);
            // speakAloud(link_name + " Link");
        }

        function addClass(tag) {
            tag.classList.add("active");
        }

        function removeClass(tag) {
            tag.classList.remove("active");
        }

        switch (keyName) {
            case "j":
                console.log("You pressed J");
                if (is_selected == 0) {
                    removeClass(currSection);
                    if (currSection.nextElementSibling.innerHTML !== "" && currSection.nextElementSibling !== null) {
                        currSection = currSection.nextElementSibling;
                        section_num++;
                    } else {
                        currSection = document.querySelector("section");
                        section_num = 1;
                    }
                    addClass(currSection) += "active";
                    speakAloud("Section " + section_num);
                } else {
                    removeClass(currElement);
                    if (currElement.nextElementSibling !== null) {
                        currElement = currElement.nextElementSibling;
                    } else {
                        if(currSection.getName !== "form"){
                            currElement = currSection.querySelector("a");
                        }
                        else{
                            currElement = currSection.querySelector("input");
                        }'use strict';
                        window.onload = function() {
                            var currSection = document.querySelector("section");
                            var total_section = document.getElementsByTagName('section').length
                            var section_num = 1;
                            var currElement = undefined;
                            var prevSection = undefined;
                            var is_selected = 0;
                            var nested_links = [];
                            var synth = window.speechSynthesis;
                            currSection.className += "active";
                            var utterThis = new SpeechSynthesisUtterance("You are at the header of the webpage");
                            synth.speak(utterThis);

                            document.addEventListener('keydown', function(event) {
                                const keyName = event.key;
                                event.preventDefault();

                                function speakAloud(text_to_speak) {
                                    synth.cancel();
                                    var utterThis = new SpeechSynthesisUtterance(text_to_speak);
                                    synth.speak(utterThis);
                                }

                                function speak_for_buttons() {
                                    if (currElement.getAttribute("title") == null) {
                                        var link_name = currElement.querySelector("img").getAttribute("title");
                                    } else {
                                        link_name = currElement.getAttribute("title");
                                    }
                                    speakAloud(link_name);
                                    // speakAloud(link_name + " Link");
                                }

                                function addClass(tag) {
                                    tag.classList.add("active");
                                }

                                function removeClass(tag) {
                                    tag.classList.remove("active");
                                }

                                switch (keyName) {
                                    case "j":
                                        console.log("You pressed J");
                                        if (is_selected == 0) {
                                            removeClass(currSection);
                                            if (currSection.nextElementSibling.innerHTML !== "" && currSection.nextElementSibling !== null) {
                                                currSection = currSection.nextElementSibling;
                                                section_num++;
                                            } else {
                                                currSection = document.querySelector("section");
                                                section_num = 1;
                                            }
                                            currSection.className += "active";
                                            speakAloud("Section " + section_num);
                                        } else {
                                            removeClass(currElement);
                                            if (currElement.nextElementSibling !== null) {
                                                currElement = currElement.nextElementSibling;
                                            } else {
                                                if(currSection.getName !== "form"){
                                                    currElement = currSection.querySelector("a");
                                                }
                                                else{
                                                    currElement = currSection.querySelector("input");
                                                }
                                            }
                                            addClass(currElement);
                                            if(currElement.TagName == "a"){
                                                speak_for_buttons();
                                            }
                                            else{
                                                speakAloud(currElement.textContent);
                                            }
                                        }
                                        break;

                                    case "f":
                                        console.log("You pressed F");
                                        if (is_selected == 0) {
                                            removeClass(currSection);
                                            if (currSection.previousElementSibling !== null) {
                                                currSection = currSection.previousElementSibling;
                                                section_num--;
                                            } else {
                                                currSection = document.querySelectorAll("section")[document.querySelectorAll("section").length - 1];
                                                section_num = total_section;
                                            }
                                            addClass(currSection);
                                            speakAloud("Section " + section_num);
                                        } else {
                                            removeClass(currElement);
                                            if (currElement.previousElementSibling !== null) {
                                                currElement = currElement.previousElementSibling;
                                            } else {
                                                currElement = currSection.lastElementChild;
                                            }
                                            addClass(currElement);
                                            if(currElement.TagName == "a"){
                                                speak_for_buttons();
                                            }
                                            else{
                                                speakAloud(currElement.textContent);
                                            }
                                        }
                                        break;

                                    case "Escape":
                                        console.log("You pressed Escape");
                                        if (is_selected == 1) {
                                            removeClass(currElement);
                                            addClass(currSection);
                                            speakAloud("Section " + section_num);
                                            is_selected = 0;
                                        } else {
                                            if (is_selected == 0 && prevSection !== undefined) {
                                                removeClass(currSection);
                                                addClass(prevSection);
                                                prevSection = undefined;
                                            }
                                            // } else if (nested_links.length !== 0) {
                                                // location.href = nested_links.pop();
                                            else{
                                                location.href = "indexhome.html";
                                            }
                                        }
                                        break;

                                    case " ":
                                        console.log("You pressed Select");
                                        if (is_selected == 0) {
                                            removeClass(currSection);
                                            speakAloud("Section " + section_num + " is selected.................");
                                            if (currSection.querySelector("form") !== null) {
                                                prevSection = currSection;
                                                currElement = currSection.querySelector("form");
                                                currSection = currElement;
                                                speakAloud("Forms Selected");
                                            } else if (currSection.querySelector("li") !== null) {
                                                currElement = currSection.querySelector("li");
                                                speakAloud(currElement.textContent)
                                            } else if (currSection.querySelector("input") !== null) {
                                                currElement = currSection.querySelector("input");
                                                speakAloud(currElement.textContent);
                                            } else if (currSection.querySelector("a") !== null) {
                                                currElement = currSection.querySelector("a");
                                                speak_for_buttons();
                                            } else {
                                                currElement = currSection.firstElementChild;
                                            }
                                            addClass(currElement);
                                            if (currSection !== currElement)
                                                is_selected = 1;
                                        } else {
                                            // if(currElement.tagName == "a"){
                                            nested_links.push(location.href);
                                            speakAloud("Link " + speak_for_buttons + " is selected.......");
                                            location.href = currElement.querySelector("a").getAttribute("href");
                                            is_selected = 0;
                                            // }
                                            // else{
                                            // 	currElement = currElement.firstElementChild;
                                            // }
                                        }
                                        break;
                                }

                                event.stopPropagation();
                            }, false);
                        }
                    }
                    addClass(currElement);
                    if(currElement.TagName == "a"){
                        speak_for_buttons();
                    }
                    else{
                        speakAloud(currElement.textContent);
                    }
                }
                break;

            case "f":
                console.log("You pressed F");
                if (is_selected == 0) {
                    removeClass(currSection);
                    if (currSection.previousElementSibling !== null) {
                        currSection = currSection.previousElementSibling;
                        section_num--;
                    } else {
                        currSection = document.querySelectorAll("section")[document.querySelectorAll("section").length - 1];
                        section_num = total_section;
                    }
                    addClass(currSection);
                    speakAloud("Section " + section_num);
                } else {
                    removeClass(currElement);
                    if (currElement.previousElementSibling !== null) {
                        currElement = currElement.previousElementSibling;
                    } else {
                        currElement = currSection.lastElementChild;
                    }
                    addClass(currElement);
                    if(currElement.TagName == "a"){
                        speak_for_buttons();
                    }
                    else{
                        speakAloud(currElement.textContent);
                    }
                }
                break;

            case "Escape":
                console.log("You pressed Escape");
                if (is_selected == 1) {
                    removeClass(currElement);
                    addClass(currSection);
                    speakAloud("Section " + section_num);
                    is_selected = 0;
                } else {
                    if (is_selected == 0 && prevSection !== undefined) {
                        removeClass(currSection);
                        addClass(prevSection);
                        prevSection = undefined;
                    }
                    // } else if (nested_links.length !== 0) {
                        // location.href = nested_links.pop();
                    else{
                        location.href = "indexhome.html";
                    }
                }
                break;

            case " ":
                console.log("You pressed Select");
                if (is_selected == 0) {
                    removeClass(currSection);
                    speakAloud("Section " + section_num + " is selected.................");
                    if (currSection.querySelector("form") !== null) {
                        prevSection = currSection;
                        currElement = currSection.querySelector("form");
                        currSection = currElement;
                        speakAloud("Forms Selected");
                    } else if (currSection.querySelector("li") !== null) {
                        currElement = currSection.querySelector("li");
                        speakAloud(currElement.textContent)
                    } else if (currSection.querySelector("input") !== null) {
                        currElement = currSection.querySelector("input");
                        speakAloud(currElement.textContent);
                    } else if (currSection.querySelector("a") !== null) {
                        currElement = currSection.querySelector("a");
                        speak_for_buttons();
                    } else {
                        currElement = currSection.firstElementChild;
                    }
                    addClass(currElement);
                    if (currSection !== currElement)
                        is_selected = 1;
                } else {
                    // if(currElement.tagName == "a"){
                    nested_links.push(location.href);
                    speakAloud("Link " + speak_for_buttons + " is selected.......");
                    location.href = currElement.querySelector("a").getAttribute("href");
                    is_selected = 0;
                    // }
                    // else{
                    // 	currElement = currElement.firstElementChild;
                    // }
                }
                break;
        }

        event.stopPropagation();
    }, false);
}
