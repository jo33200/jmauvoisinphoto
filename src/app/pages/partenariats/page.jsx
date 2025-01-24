
const Partenariat = () => {

  return (

    <div className="flex flex-col items-center justify-center w-full h-full">

      <h1 className="text-4xl font-bold text-center">Partenariats</h1>

      <div className="flex flex-col items-center justify-center w-full h-full gap-4">

        <div className="flex flex-col items-center justify-center w-full h-full gap-4">

          <h2 className="text-2xl font-bold text-center">Partenariats en cours</h2>

          <div className="flex flex-col items-center justify-center w-full h-full gap-4">

            <div className="flex flex-col items-center justify-center w-full h-full gap-4">

              <h3 className="text-xl font-bold text-center">Partenariat avec l'association "Les Amis de la Terre"</h3>

              <p className="text-base text-center">

                <a href="https://www.amisdelaterre.org/" target="_blank" rel="noreferrer noopener" className="text-blue-500 hover:underline">Les Amis de la Terre</a>

                {" "}est une association de protection de l'environnement qui a pour objectif de sensibiliser le grand public aux enjeux écologiques et de promouvoir des actions concrètes pour la préservation de la planète.

              </p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Partenariat;