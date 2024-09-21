export const Contact = () => {
  return (
    <div>
      {/* <div className="contactmessageblock">
          <p className="contactmessage">
            Vous souhaitez en savoir plus ou <br />
            vous avez simplement une <br /> question ? Contactez-nous.
          </p>
      </div>

      <div>
        <div className="contact">
          <div className="contactmail">
            <div className="contacttel">
              <img
                src="src/images/telephone.png"
                alt=""
                className="imagelogocontact"
              />

              <div>
                <div>
                  <h3>Service client</h3>{" "}
                </div>
                <div>(+243) 833 334 057 </div>
              </div>
            </div>
          </div>

          <div className="contactadresse">
            <div>
              <img
                src="src/images/mail.png"
                alt=""
                className="imagelogocontact"
              />

              <div className="contacttel">
                <h3>Assistance par e-mail </h3>
                <div>helpdesk@ntoprog.org </div>
                <div> support@ntoprog.org</div>
              </div>
            </div>
          </div>

          <div className="contactadresse">
            <div>
              <img
                src="src/images/logo-adresse.png"
                alt=""
                className="imagelogocontact"
              />

              <div className="contacttel">
                <h3>Siège social</h3>
                <div>
                  Silikin Village Concession COTEX N° 63, <br />Ave Colonel Mondjiba,
                  Kinshasa
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}



      <section id="contact" className=" py-40 relative" data-aos="zoom-out">
            <div className=" bg-[url('src/images/Untitled-design-81.jpg')] bg-contain bg-cover h-full py-48 absolute z-0 inset-0"></div>
            <div className="absolute inset-0 bg-black opacity-80"></div>

              <div className="container mx-auto text-center  relative z-10 w-[90%]">
                <div className=""><h2 className="text-6xl font-bold mb-8 text-white"  data-aos="zoom-in">Vous souhaitez en savoir plus ou
vous avez simplement une
question ? <br /> </h2></div>

                <div className="flex flex-wrap justify-center items-center ">
                 
                  <div className="w-full sm:w-1/2 md:w-1/5 text-white ">

                                  <div><img src="src/images/telephone.png" alt=""className="imagelogocontact"/></div>
                                  <div><h3>Service client</h3>(+243) 833 334 057 </div>
                    
                  </div>

                  <div className="w-full sm:w-1/2 md:w-1/5 text-white ">
                    <div className=" ">
                    <div>
              <img
                src="src/images/mail.png"
                alt=""
                className="imagelogocontact"
              />

              <div className="">
                <h3>Assistance par e-mail </h3>
                <div>helpdesk@ntoprog.org </div>
                <div> support@ntoprog.org</div>
              </div>
            </div>
                      {/* <p className="mb-8 text-2xl">Contactez-nous.</p> */}
                      
                    </div>
                  </div>

                  <div className="w-full sm:w-1/2 md:w-1/5 text-white ">
                    <div className=" ">
                    <div>
              <img
                src="src/images/logo-adresse.png"
                alt=""
                className="imagelogocontact"
              />

              <div className="">
                <h3>Siège social</h3>
                <div>
                  Silikin Village Concession COTEX N° 63, <br />Ave Colonel Mondjiba,
                  Kinshasa
                </div>
              </div>
            </div>
                      {/* <p className="mb-8 text-2xl">Contactez-nous.</p> */}
                      
                    </div>
                  </div>
                 

                </div>
              </div>
            </section>


    </div>
  );
};
