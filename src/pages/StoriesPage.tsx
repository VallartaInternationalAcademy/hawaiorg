import React from "react";
import HeroPage from "../components/Hero/HeroPage";
import storiesImage from "../assets/images/charity/cause04.jpg";
import storie1 from "../assets/images/charity/cause01.jpg";
import storie2 from "../assets/images/charity/cause02.jpg";
import storie3 from "../assets/images/charity/cause03.jpg";
import storie4 from "../assets/images/charity/cause04.jpg";
import BlogCard from "../components/cards/BlogCard";
import DonateSection from "../containers/DonateSection";
import useScrollToTop from "../hooks/useScrollToTop";

interface StoriesType {
  imagen: string;
  titulo: string;
  descripcion: string;
  nombre: string;
  HistoryLink: string;
}

const Stories: StoriesType[] = [
  {
    imagen: storie1,
    titulo: "Titulo De La Historia",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aut rerum ad ducimus. Officiis, repellendus.",
    nombre: "Alan Cunningham",
    HistoryLink: "Storie1",
  },
  {
    imagen: storie2,
    titulo: "Titulo De La Historia",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aut rerum ad ducimus. Officiis, repellendus.",
    nombre: "Alan Cunningham",
    HistoryLink: "Storie2",
  },
  {
    imagen: storie3,
    titulo: "Titulo De La Historia",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aut rerum ad ducimus. Officiis, repellendus.",
    nombre: "Alan Cunningham",
    HistoryLink: "Storie3",
  },
  {
    imagen: storie4,
    titulo: "Titulo De La Historia",
    descripcion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi aut rerum ad ducimus. Officiis, repellendus.",
    nombre: "Alan Cunningham",
    HistoryLink: "Storie4",
  },
];

const StoriesPage = () => {
  useScrollToTop();
  return (
    <div>
      <HeroPage
        imagen={storiesImage}
        page="STORIES OF TRANSFORMATION"
        description="Discover inspiring stories of change and resilience from individuals and families supported by Corazon Hawaii.."
        Breadcrumb={[{ link: "/", nombre: "Home" }]}
      />

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="section-title mb-4 pb-2">
                <h4 className="title">
                  EXPLORE INSPIRING{" "}
                  <span className="text-primary fw-bold">STORIES</span>{" "}
                </h4>
              </div>
            </div>
            {Stories.map((s) => (
              <BlogCard
                HistoryLink="/story/1"
                descripcion={s.descripcion}
                imagen={s.imagen}
                nombre={s.nombre}
                titulo={s.titulo}
                key={s.HistoryLink}
              />
            ))}
          </div>
        </div>
      </section>
      <DonateSection />
    </div>
  );
};

export default StoriesPage;
