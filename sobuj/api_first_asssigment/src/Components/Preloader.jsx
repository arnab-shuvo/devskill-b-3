import { Component } from 'react';

class Preloader extends Component{
    state = {
        
      };
    
      componentDidMount = () => {
       
      };
    
      
    

    render(){
        return<>
            
            {/* <!-- Preloader --> */}
                {/* <div id="preloader" className="preloader">
                    <div className="preloader-inner">
                        <div className="preloader-icon">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>   */}
            {/* <!-- SPINNING SQUARES --> */}
            <div className="spinnerArea">
                <div className="spinner-box">
                    <div className="configure-border-1">  
                        <div className="configure-core"></div>
                    </div>  
                    <div className="configure-border-2">
                        <div className="configure-core"></div>
                    </div> 
                </div>
            </div>
            
           

                {/* <!-- End Preloader --> */}
                
        </>
    }
    
}

export default Preloader;