AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Operations Intern",
    cardImage: "assets/images/experience-page/1598027426181.jpg",
    place: "Little Master",
    time: "(July - August, 2021)",
    desp: "Worked as a Operations specialist in the tutor community managment department .",
  },
  {
    title: "Academic Project",
    cardImage: "assets/images/experience-page/certficate.png",
    place: "Industry review peoject",
    time: "(July - August, 2021)",
    desp: "Inculcated in-depth knowledge about the TRADING industry which focused mainly on three companies- FUTURE CONSUMER LTD , ARVIND FASHION LTD , PTC INDIA LTD.  Got to know the industry environment and analyzed various factors which contribute to the growth or fall of the industry.",
  },
  {
    title: "Marketing Intern",
    cardImage: "assets/images/experience-page/jm-financial--600.png",
    place: "JM Financials Ltd",
    time: "(July - August, 2022)",
    desp: "Worked as a marketing intern in a financial company known as JM Financial Ltd. Designed and analysed data related to the progressing of there products and customer satisfaction.",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);
