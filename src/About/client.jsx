import IMAGES from "../Allfiles/image";

function Client() {
   
   return (
      <>
         <div className="client--sections-our">
            <div className="wrapper">
               <div className="container">
                  <div className="client--sections-trusted">
                     <h2>Our Trusted  <span style={{ color: "#FF546A" }}>Clients</span></h2>
                  </div>
                  <div className='client--sections-fum'>
                     <div className="client--sections-flx">
                        <div className="client--sections-all-images">
                           <img style={{ paddingTop: "20px" }} src={IMAGES.f2} />
                        </div>
                        <div className="client--sections-all-images">
                           <img src={IMAGES.h0} />
                        </div>
                        <div className="client--sections-all-images">
                           <img src={IMAGES.f3} />
                        </div>
                        <div className="client--sections-all-images">
                           <img style={{ paddingTop: "10px" }} src={IMAGES.f4} />
                        </div>
                        <div className="client--sections-all-images">
                           <img src={IMAGES.f5} />
                        </div>
                        <div className="client--sections-all-images">
                           <img src={IMAGES.f9} />
                        </div>
                        <div className="client--sections-all-images">
                           <img style={{ paddingTop: "20px" }} src={IMAGES.f7} />
                        </div>
                        <div className="client--sections-all-images">
                           <img style={{ paddingTop: "15px" }} src={IMAGES.f8} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
export default Client;