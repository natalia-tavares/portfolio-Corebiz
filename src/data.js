import Background from "./Images/background.jpg";
import profilePicture from "./Images/profile-picture.jpg";

export const data = {
  user: {
    background: Background,
    picture: profilePicture,
    name: "Natália Tavares Ribeiro",
    description: "Front-end"
  },
  content: [
    {
      title: "👩‍💻 Conhecimentos",
      posts: [
        {
          background: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/HTML" ,
          title: "HTML"
        },
        {
          background: "https://images.unsplash.com/photo-1610986603166-f78428624e76?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
          link: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
          title: "CSS"
        },
        {
          background: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80",
          link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          title: "JavaScript"
        },
        {
          background: "https://images.unsplash.com/photo-1610986602726-19f650133f7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
          link: "https://pt-br.reactjs.org/docs/getting-started.html",
          title: "React"
        }
      ]
    },
    {
      title: "🎓 Certificados",
      posts: [
        {
          background: "https://scontent.fcgh3-1.fna.fbcdn.net/v/t1.6435-9/192277324_1927662860722650_8768367432949959026_n.png?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeG-7x7bKQ8TjZuBb1Cgwd4fd3nGB0G70g53ecYHQbvSDtlODZk7f0D8cHq0Zmbkog6HVcAFrO3GESZdj59Df-cf&_nc_ohc=DVWo9_-52g0AX8mAShn&_nc_ht=scontent.fcgh3-1.fna&oh=2e0d49e1dc2b35a45f63accea61c0936&oe=616CCFEE",
          link: "https://imgur.com/a/7U9BGje",
          title: "Eu Progr{amo}"
        },
        {
          background: "https://play-lh.googleusercontent.com/IDLZXWHLCVun428g_YGnR2HgnoIUlIRNfkmEEM0hmrzhBKZrhJ5UwM0_eHaWQT4gXAs=s180-rw",
          link: "https://imgur.com/a/TcgHRt7",
          title: "Alura"
        },
        {
          background: "data:image/png;base64,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",
          link: "https://imgur.com/a/VEcTNVA",
          title: "Hiring Coders"
        },
        {
          background: "https://i.imgur.com/LpY2nT4.png",
          link: "https://imgur.com/a/IeLuVvc",
          title: "Logíca de Programção"
        }
      ]
    },
    {
      title: " 💻 Projetos",
      posts: [
        {
          background: "https://i.imgur.com/rQ7DLKA.jpg",
          link: "https://ada-lovelacee.netlify.app/",
          title: "Ada Lovelace"
        },
        {
          background: "https://i.imgur.com/U25Y2KT.jpg",
          link: "https://prettybabysstore.netlify.app/",
          title: "Pretty Babys Store"
        },
        {
          background: "https://i.imgur.com/CM506ma.jpg",
          link: "https://lanonapizzaria.netlify.app/",
          title: "La Nona Pizzaria"
        },
        {
          background: "https://i.imgur.com/JqVPl80.jpg",
          link: "https://gobeyond3-corebiz.netlify.app/",
          title: "Go beyond 3ª Edição"
        }
      ]
    }
  ],
  navigation: {
    whatsapp: "",
    phone: "",
    email: ""
  }
}