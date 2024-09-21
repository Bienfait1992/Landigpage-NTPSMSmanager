import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

export const About = () => {
  useEffect(()=>{
    Aos.init({
      duration:3000,
      once:false,
      mirror:true
    }) 

  }, [])
  return (
    <section className="shadow-lg   w-full justify-center items-center py-20 " >
      
        <div  className="text-center text-[40px] mb-12" data-aos="fade-up"><h2 className=""> C'est quoi NTP SMS Manager ?</h2></div>
      

      <div className=" contenair mx-auto text-justify items-center justify-center w-[90%]">
                  
                            <div className="flex flex-wrap gap-7">

                                             <div><img src="src/images/Untitled-design-81.jpg" alt="" className="mt-3 "data-aos="zoom-in"/></div>

                                    

                                        <div className="justify-center mb-10  w-full sm:w-1/1 md:w-1/2" >
                                                <h2 className=" text-3xl mb-6" data-aos="fade-left">
                                                  Qu'est-ce qui fait de NTP SMS <br />
                                                  Manager un bon outil pour vos SMS ?
                                                </h2>

                                                <p className="text-xl ">
                                                  NTP SMS Manager est utilisé depuis plusieurs années par un bon
                                                  nombre d'utilisateurs satisfaits. Notre service de maintenance est
                                                  disponible 24h/7 pour rendre service à tous nos clients en cas d'un
                                                  souci. Nous travaillons constamment pour améliorer l'outil et le
                                                  rendre davantage souple et facile à utiliser.
                                                </p>


                                                    <div className=" flex  text-justify flex-wrap   gap-10  mt-10 ">

                                                                  <div className="w-full sm:w-1/1 md:w-1/3">

                                                                  <div className=" flex items-center gap-2">
                                                                  <div class="text-green-600">
                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                                                          <path d="M20 6 9 17l-5-5"></path>
                                                                      </svg>
                                                                  </div>
                                                                  <h3 className="text-xl font-bold">SMS SÛRS</h3>

                                                                  </div>
                                                                      <p>Vos messages sont traités dans une ligne Premium, ce qui élève le taux de livraison jusqu'à 99%.</p>
                                                                  </div>


                                                                  <div className="w-full sm:w-1/1 md:w-1/3">

                                                                  <div className="flex gap-2 items-center">
                                                                  <div class="text-green-600">
                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                                                          <path d="M20 6 9 17l-5-5"></path>
                                                                      </svg>
                                                                  </div>
                                                                      <h3 className="text-xl font-bold">SMS RAPIDES</h3>
                                                                      </div>
                                                                      <p>Nos serveurs sont puissants et peuvent traiter jusqu'à 10 mille requêtes par seconde, ce qui est avantageux pour vous.</p>
                                                                  </div>

                                                                  <div className="w-full sm:w-1/1 md:w-1/3">

                                                                  <div className="flex gap-2 items-center">
                                                                  <div class="text-green-600">
                                                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                                                          <path d="M20 6 9 17l-5-5"></path>
                                                                      </svg>
                                                                  </div>
                                                                      <h3 className="text-xl font-bold">SMS SECURISES</h3>
                                                                      </div>
                                                                      <p>Vos messages sont sécurisés et ne sont visibles que par vousdans votre espace d'administration, et par les destinataires concernés.</p>
                                                                  </div>
                                                    </div>

                                        </div>
                          </div>

                                  
                  

                 
         

                     
                      
                 

            


      </div>
    </section>
    
  );
};




{/* <div class="flex mx-auto justify-center items-center">
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-6 m-8">
        <div class="flex flex-col rounded-2xl w-full xl:w-96 bg-[#ffffff] text-[#374151] shadow-xl">
            <figure class="flex justify-center items-center">
                <img src="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png" alt="Card Preview" class="rounded-t-2xl">
            </figure>
            <div class="flex flex-col p-8 h-full">
                <div class="text-3xl  font-bold pb-6">Basic</div>
                <div class="  text-lg pb-12">Basic features. Get started completely for free.</div>
                <div class="flex flex-col gap-3  text-base">
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div class="font-bold">Core Features</div>
                    </div>
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>Limited Storage</div>
                    </div>
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>Ticket Support</div>
                    </div>
                </div>
                <div class="flex flex-grow"></div>
                <div class="flex pt-10">
                    <button class="w-full bg-[#7e22ce] text-[#ffffff] font-bold text-base p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">Get started - 100% Free</button>
                </div>
            </div>
        </div>
        <div class="flex flex-col rounded-2xl w-full xl:w-96 bg-[#ffffff] text-[#374151] shadow-xl">
            <figure class="flex justify-center items-center">
                <img src="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png" alt="Card Preview" class="rounded-t-2xl">
            </figure>
            <div class="flex flex-col p-8 h-full">
                <div class="text-3xl  font-bold pb-6">Pro</div>
                <div class="  text-lg pb-12">Get access to advanced features for increased productivity.</div>
                <div class="flex flex-col gap-3  text-base">
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div class="font-bold">All features of the basic plan</div>
                    </div>
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>Increased Storage</div>
                    </div>
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>Advanced Analytics</div>
                    </div>
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>Reporting Tools</div>
                    </div>
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>Third-Party Integrations</div>
                    </div>
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>E-Mail Support</div>
                    </div>
                </div>
                <div class="flex flex-grow"></div>
                <div class="flex pt-10">
                    <button class="w-full bg-[#7e22ce] text-[#ffffff] font-bold text-base p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">Buy Pro</button>
                </div>
            </div>
        </div>
        <div class="flex flex-col rounded-2xl w-full xl:w-96 bg-[#ffffff] text-[#374151] shadow-xl">
            <figure class="flex justify-center items-center">
                <img src="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png" alt="Card Preview" class="rounded-t-2xl">
            </figure>
            <div class="flex flex-col p-8 h-full">
                <div class="text-3xl  font-bold pb-6">Premium</div>
                <div class="  text-lg pb-12">Exclusive features and priority support for businesses.</div>
                <div class="flex flex-col gap-3  text-base">
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div class="font-bold">All features of the Pro plan</div>
                    </div>
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>Unlimited Storage</div>
                    </div>
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>End-to-End Encryption</div>
                    </div>
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>Predictive Insights</div>
                    </div>
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>Early-Access</div>
                    </div>
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>Dedicated Account Manager</div>
                    </div>
                    <div class="flex flex-row gap-3">
                        <div class="text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check">
                                <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                        </div>
                        <div>24/7 Dedicated Customer Support</div>
                    </div>
                </div>
                <div class="flex flex-grow"></div>
                <div class="flex pt-10">
                    <button class="w-full bg-[#7e22ce] text-[#ffffff] font-bold text-base p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">Buy Premium</button>
                </div>
            </div>
        </div>
    </div>
</div> */}