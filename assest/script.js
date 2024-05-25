document
  .getElementById("dynamicForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const dynamicInput = document.getElementById("dynamicInput").value;

    let valid = true;

    // Reset error messages
    let erroMessage = document.getElementById("inputError");

    // Determine if the input is an email or mobile number and validate accordingly
    if (validateEmail(dynamicInput)) {
      erroMessage.textContent = "Valid email entered!";
    } else if (validateMobile(dynamicInput)) {
      erroMessage.textContent = "Valid mobile number entered!";
    } else {
      erroMessage.textContent =
        "Please enter a valid email address or mobile number (123-456-7890).";
      valid = false;
    }

    if (valid) {
      alert("Form submitted successfully!");
      // Here you can add code to actually submit the form data
    }
  });

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function validateMobile(mobile) {
  const re = /^[0-9]{10}$/;
  return re.test(String(mobile));
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".toggleButton");
  const contents = document.querySelectorAll(".content");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const content = this.nextElementSibling;
      const icon = this.querySelector("i");
      // Collapse all content sections
      contents.forEach((c) => {
        if (c !== content) {
          c.classList.remove("expanded");
          c.classList.add("collapsed");
          const siblingButton = c.previousElementSibling;
          siblingButton
            .querySelector("i")
            .classList.replace("fa-close", "fa-plus");
        }
      });

      // Toggle the clicked content section
      if (content.classList.contains("collapsed")) {
        content.classList.remove("collapsed");
        content.classList.add("expanded");
        icon.classList.replace("fa-plus", "fa-close");
      } else {
        content.classList.remove("expanded");
        content.classList.add("collapsed");
        icon.classList.replace("fa-close", "fa-plus");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const languageSelect = document.getElementById("language-select");

  const translations = {
    en: {
      logIn: "Log in",
      FeatureTitle: "Unlimited movies, TV shows and more",
      FeatureDescription: "Watch anywhere. Cancel anytime.",
      formDes:
        "Ready to watch? Enter your email or mobile number to create or restart your membership.",
      formButton: "Get Started",
      enjoyTitle: "Enjoy on your TV",
      enjoyDes:
        "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
      load: "Downloading...",
      downloadTitle: "Download your shows to watch offline",
      downloadDes:
        "Save your favourites easily and always have something to watch.",
      watchTitle: "Watch everywhere",
      watchDes:
        "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      profileTitle: "Create profiles for kids",
      profileDes:
        "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
      askedTitle: "Frequently Asked Questions",
      netflixQue: "What is Netflix?",
      netflixAns:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
      netflixAns2:
        "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!",
      netflixQue1: "How much does Netflix cost?",
      netflixAns3:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.",
      netflixQue2: "Where can I watch?",
      netflixAns4:
        "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
      netflixAns5:
        "You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.",
      netflixQue3: "How do I cancel?",
      netflixAns6:
        "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
      netflixQue4: "What can I watch on Netflix?",
      netflixAns7:
        "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
      netflixQue5: "Is Netflix good for kids?",
      netflixAns8:
        "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
      netflixAns9:
        "Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.",
        footerTitle : " Questions? Call 000-800-919-1694",
        footerMenu1 : " FAQ",
        footerMenu2 : " Investor Relations",
        footerMenu3 : " Privacy",
        footerMenu4 : " Speed Test",
        footerMenu5 : " Help Centre",
        footerMenu6 : " Jobs",
        footerMenu7 : " Cookie Preferences",
        footerMenu8 : " Legal Notices",
        footerMenu9 : " Account",
        footerMenu10 : "Ways to Watch ",
        footerMenu11 : " Corporate Information",
        footerMenu12 : "Only on Netflix ",
        footerMenu13 : "Media Centre ",
        footerMenu14 : "Terms of Use ",
        footerMenu15 : "Contact Us ",

    },
    hi: {
      logIn: "लॉग इन करें",
      FeatureTitle: "अनलिमिटेड फ़िल्में, टीवी शो के साथ भी बहुत कुछ",
      FeatureDescription: "जहां चाहें देखें. जब चाहें कैंसल करें.",
      formDes:
        "देखने के लिए तैयार? अपनी मेंबरशिप बनाने या रीस्टार्ट करने के लिए अपना ईमेल एड्रेस या मोबाइल नंबर डालें.",
      formButton: "शुरू करें",
      enjoyTitle: "अपने टीवी पर आनंद लें",
      enjoyDes:
        "स्मार्ट टीवी, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray प्लेयर के साथ ही दूसरे डिवाइस पर भी देखें.",
      load: "डाउनलोड हो रहा है...",
      downloadTitle: "ऑफ़लाइन देखने के लिए अपने शो डाउनलोड करें",
      downloadDes:
        "अपने पसंदीदा शो और फ़िल्में सेव करें, ताकि आप कभी भी इन्हें देख सकें.",
      watchTitle: "हर जगह देखें",
      watchDes:
        "बिना ज़्यादा पेमेंट किए, अपने फ़ोन, टैबलेट, लैपटॉप और टीवी पर अनलिमिटेड फ़िल्में और टीवी शो स्ट्रीम करें.",
      profileTitle: "बच्चों के लिए प्रोफ़ाइल बनाएं",
      profileDes:
        "बच्चों को जाने दें अपने पसंदीदा किरदारों के साथ उस रोमांचक सफ़र पर जो सिर्फ़ उनके लिए ही है - आपकी मेंबरशिप के साथ फ़्री.",
      askedTitle: "अक्सर पूछे जाने वाले सवाल",
      netflixQue: "Netflix क्या है?",
      netflixAns:
        "Netflix एक स्ट्रीमिंग सर्विस है जिसके ज़रिए आप हज़ारों इंटरनेट-कनेक्टेड डिवाइस पर तरह-तरह के अवॉर्ड विजेता टीवी शो, फ़िल्में, ऐनिमे, डॉक्यूमेंट्रीज़ का लुत्फ़ उठा सकते हैं.",
      netflixAns2:
        "आप जब चाहें, जितना चाहें, बिना किसी विज्ञापन के देख सकते हैं – सारा कॉन्टेंट बहुत कम मासिक शुल्क पर. खोजने के लिए हमेशा कुछ नया होता है और हर हफ़्ते नए टीवी शो और फ़िल्में जोड़ी जाती हैं!",
      netflixQue1: "Netflix की कीमत कितनी है?",
      netflixAns3:
        "हर महीने की तय फ़ी देकर अपने स्मार्टफ़ोन, टैबलेट, स्मार्ट टीवी, लैपटॉप, या स्ट्रीमिंग डिवाइस पर Netflix देखें. हर महीने ₹149 से ₹649 तक के प्लान. कोई एक्सट्रा कीमत या कॉन्ट्रैक्ट नहीं.",
      netflixQue2: "मैं कहां देख सकता हूं?",
      netflixAns4:
        "कहीं भी, कभी भी देखें अपने पर्सनल कंप्यूटर से या स्मार्ट टीवी, स्मार्टफ़ोन, टैबलेट, स्ट्रीमिंग मीडिया प्लेयर और गेम कंसोल सहित Netflix ऐप ऑफ़र करने वाले किसी भी इंटरनेट-कनेक्टेड डिवाइस पर तुरंत देखने के लिए, वेब पर netflix.com पर अपने Netflix अकाउंट में साइन इन करें.",
      netflixAns5:
        "आप iOS, Android या Windows 10 ऐप से भी अपने पसंदीदा शो डाउनलोड कर सकते हैं. चलते-फिरते और बिना इंटरनेट कनेक्शन के देखने के लिए डाउनलोड का उपयोग करें. Netflix को अपने साथ कहीं भी ले जाएं.",
      netflixQue3: "मैं कैसे कैंसल करूं?",
      netflixAns6:
        "Netflix लचीला है. कोई परेशान करने वाले कॉन्ट्रैक्ट नहीं और कोई बंधन नहीं हैं. आप आसानी से दो क्लिक में अपना अकाउंट ऑनलाइन कैंसल कर सकते हैं. कोई कैंसलेशन फ़ीस नहीं है – अपना अकाउंट कभी भी शुरू या बंद करें.",
      netflixQue4: "मैं Netflix पर क्या देख सकता/सकती हूं?",
      netflixAns7:
        "Netflix की बहुत बड़ी लाइब्रेरी में फ़ीचर फ़िल्मों, डॉक्यूमेंट्री, टीवी शो, ऐनिमे, अवॉर्ड-विनिंग Netflix ओरिजिनल्स के अलावा और भी बहुत कुछ है. आप जितना चाहें, कभी भी देखें.",
      netflixQue5: "क्या Netflix बच्चों के लिए ठीक है?",
      netflixAns8:
        "आपकी मेंबरशिप में Netflix किड्स एक्सपीरियंस शामिल है. बच्चे अपनी तरह से पारिवारिक टीवी शो और फ़िल्मों का आनंद लेते हैं, लेकिन आप उनके द्वारा देखे जाने वाले कॉन्टेंट को कंट्रोल कर सकते हैं.",
      netflixAns9:
        "बच्चों की प्रोफ़ाइल में PIN से सुरक्षित पैरेंटल कंट्रोल्स होते हैं जिससे आप बच्चों को मेच्योरिटी रेटिंग वाले कॉन्टेंट देखने से रोक सकते हैं और उन टाइटल को ब्लॉक कर सकते हैं जिन्हें आप नहीं चाहते हैं कि बच्चे देखें.",
        footerTitle : " कोई सवाल है? 000-800-919-1694 पर कॉल करें",
        footerMenu1 : " FAQ",
        footerMenu2 : " इंवेस्टर संबंध",
        footerMenu3 : " प्रायवेसी",
        footerMenu4 : " स्पीड टेस्ट",
        footerMenu5 : " सहायता केंद्र",
        footerMenu6 : " नौकरियां",
        footerMenu7 : " कुकी प्रेफ़रेंस",
        footerMenu8 : " कानूनी सूचनाएं",
        footerMenu9 : " अकाउंट",
        footerMenu10 : " देखने के तरीके",
        footerMenu11 : " कॉरपोरेट जानकारी",
        footerMenu12 : " सिर्फ़ Netflix पर",
        footerMenu13 : " मीडिया केंद्र",
        footerMenu14 : " उपयोग की शर्तें",
        footerMenu15 : "हमसे संपर्क करें ",
    },
  };

  function updateLanguage(language) {
    document.querySelectorAll("[data-key]").forEach((element) => {
      const key = element.getAttribute("data-key");
      element.textContent = translations[language][key];
    });
  }

  languageSelect.addEventListener("change", (e) => {
    const selectedLanguage = e.target.value;
    updateLanguage(selectedLanguage);
  });

  // Set default language to English
  updateLanguage("en");
});
