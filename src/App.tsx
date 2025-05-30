import { CardProfile } from "./components/Card/CardProfile"
import imagemPerfil from './assets/images/profile-img.jpeg';

function App() {

  return (
    <div className="flex items-center justify-center h-screen bg-rose-200">
      <CardProfile
        nome="Sabrina"
        sobrenome="Souza"
        imagemPerfil={imagemPerfil}
        profissao="Desenvolvedora Front-End"
        descricao="Cria Interfaces Bonitas, Rápidas e Intuitivas."
        skills={["React", "Typescript", "Tailwind"]}
      />
    </div>
  );
}

export default App
