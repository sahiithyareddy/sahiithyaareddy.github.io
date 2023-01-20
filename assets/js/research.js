/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Applied Excel",
    authors:
      "Moodys",
    conferences:
      "The course is aimed at helping you to learn the best approach to solving problems in Microsoft Excel. It is a very practical course which takes a particular problem as a starting point and teaches you how to go about solving it.",
    researchYr: 2020,
    citebox: "popup1",
    image: "assets/images/research-page/Microsoft+Excel+2013+icon.png",
    citation: {
      vancouver:
        "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng. Unsupervised Learning for Intrinsic Image Decomposition From a Single Image. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 7",
    absbox: "absPopup7",
  },

  {
    title: "Google Digital Marketing",
    authors:
      "Google",
    conferences:
      "oogle Digital Marketing Certification is a certificate awarded by Google after successfully completing the requirements of the Fundaments of Digital Marketing Course. The certificate is accredited by Interactive Advertising Bureau Europe and The Open University.",
    researchYr: 2021,
    citebox: "popup2",
    image: "assets/images/research-page/main-qimg-bacc00bf57238d2ae8849b5276b3aab8.webp",
    citation: {
      vancouver:
        "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng. Unsupervised Learning for Intrinsic Image Decomposition From a Single Image. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 7",
    absbox: "absPopup7",
  },

  {
    title:
      "Google Ads - Measurement Certification",
    authors: "Google",
    conferences:
      "Google Ads is an online advertising platform developed by Google, where advertisers bid to display brief advertisements, service offerings, product listings, or videos to web users. ",
    researchYr: 2022,
    citebox: "popup3",
    image: "assets/images/research-page/Logo.max-1500x1500.png",
    citation: {
      vancouver:
        "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng. Unsupervised Learning for Intrinsic Image Decomposition From a Single Image. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    },
    abstract:
      "file:///C:/Users/sahit/OneDrive/Desktop/Google%20Ads%20-%20Measurement%20Certification%20_%20Google.pdf",
    absbox: "absPopup7",
  },

  {
    title: "Google Analytics",
    authors: "Skillup by simplilearn",
    conferences:
      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
    researchYr: 2020,
    citebox: "popup6",
    image: "assets/images/research-page/1_-ExxDAPl4rciaENKd8QSBw.png",
    citation: {
      vancouver:
        "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng. Unsupervised Learning for Intrinsic Image Decomposition From a Single Image. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    },
    abstract:
      "file:///C:/Users/sahit/OneDrive/Desktop/certificate%203%20smwa.pdf",
    absbox: "absPopup7",
  },

];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    

                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
