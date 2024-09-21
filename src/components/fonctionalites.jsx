export const Fonctionalites = () => {
  return (

    <div className="bg-gray-100 justify-center w-full mb-[100px]   mt-[100px] items-center pb-20">
      
        <div><h2 className="text-[50px] text-center mb-6">Fonctionalités</h2></div>
      


      <div className=" contenair  mx-auto text-center   ">

      <div className=" flex flex-wrap gap-12  space-x-1  justify-center  ">



       <div className=" shadow-lg  w-full sm:w-1/3 md:w-1/5 justify-center" data-aos="fade-up-left">
          <div>
            <img
              src="src/images/message personalisé.png"
              alt=""
              className=""
            />
          </div>
          <h3 className="font-bold">Expéditeur personnalisé</h3>

          <p className="p-2">
            Expéditeur personnalisé Lorsque vous envoyez un message, les gens
            verront le nom de votre entreprise, ex : NTOPROG
          </p>
        </div>


        <div className=" shadow-lg w-full sm:w-1/3 md:w-1/5  justify-center" data-aos="fade-up-right">
          <div>
            <img
              src="src/images/message lots.png"
              alt=""
              className=""
            />
          </div>
          <h3 className="font-bold">Messages programmés</h3>
          <p className="p-2">
            Expéditeur personnalisé Lorsque vous envoyez un message, les gens
            verront le nom de votre entreprise, ex : NTOPROG
          </p>
        </div>


          <div className=" shadow-lg w-full sm:w-1/3 md:w-1/5  justify-center"  data-aos="fade-up-left">
            <div>
              <img
                src="src/images/bulk message.png"
                alt=""
                className=""
              />
            </div>
            <h3 className="font-bold">Bulk message</h3>
            <p className="p-2">
              Expéditeur personnalisé Lorsque vous envoyez un message, les gens
              verront le nom de votre entreprise, ex : NTOPROG
            </p>
          </div>


          <div className=" shadow-lg w-full sm:w-1/3 md:w-1/5  justify-center"  data-aos="fade-up-right">
            <div>
              <img
                src="src/images/message bulk.png"
                alt=""
                className=""
              />
            </div>
            <h3 className="font-bold">Batch messages</h3>
            <p className="p-2">
              Expéditeur personnalisé Lorsque vous envoyez un message, les gens
              verront le nom de votre entreprise, ex : NTOPROG
            </p>
          </div>
  
          </div>
        
      </div>

      



    </div>
  );
};
