const projects = document.getElementById("projects");

const getPortfolio = () =>{
    fetch('portfolio.json')
    .then(res => res.json())
    .then(data => appendPortfolio(data))
}

getPortfolio();
const appendPortfolio = allPortfolios =>{
    allPortfolios.portfolio.forEach(portfolio => {
        const title = portfolio.title;
        const thumbnail = portfolio.thumbnail;
        const livePreviewURL = portfolio.livePreviewURL;
        const allTech = portfolio.tech;

        const prjContainer = document.createElement("div");
        prjContainer.classList.add("ind-prj", "wow", "animate__animated", "animate__fadeInUp");
        prjContainer.innerHTML=`
        <!-- ${title} -->
        <div class="prj-img" style="background: url('${thumbnail}') no-repeat center top/cover;"><!-- PROJECT IMAGE -->
            <!-- Live Preview Link -->
            <a href="${livePreviewURL}" target="_blank">
                <div class="overlay">
                    <h4 class="text weight-semibold">${title}</h4>
                    <div class="used-lan">  <!-- Used Technology -->
                    </div>
                </div>
            </a>
        </div>
        `;
        projects.append(prjContainer)

        
        let usedLang = document.getElementsByClassName("used-lan");
        const lastItem = usedLang.length - 1
        allTech.forEach(allTech => {
            const lang = document.createElement("p") ;
            lang.classList.add("lan");
            lang.classList.add(allTech);
            lang.innerText = `${allTech.toUpperCase()}`;
            usedLang[lastItem].append(lang);
        })
        
    });
}

const form = document.getElementById("contactForm")
form.addEventListener('submit', (e) =>{
    e.preventDefault()
    
    const fullName = document.getElementById('name').value
    const email = document.getElementById('email').value
    const subject = document.getElementById('subject').value
    const message = document.getElementById('message').value

    Email.send({
        Host: "smtp.gmail.com",
        Username: "bhaya.gvoice@gmail.com",
        Password: "danuqdbgaepjjevb",
        To: email,
        From: "bhaya.gvoice@gmail.com",
        Subject: `${fullName} sent you a message: ${subject}`,
        Body: message
    })
    .then(message => {alert("mail has been sent successfully")})
})

