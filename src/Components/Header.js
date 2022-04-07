import React from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

 function Header() {
  return (
    <>
<header>
<div className="container header-container">
<div className="row row-1">

        <div className=" col-2 header header-left">
            <div className="logo"><img src="./img/logo.png" className="img-fluid" alt=""/></div>
            <div className="nav-bar"></div>
        </div>
        <div className=" col-10 header-right"> 
          {<Navbar></Navbar>} 
              <div className="nav-2">
                  <div className="subbtn">
                    <button className=" btn-nav-bar">Subscribe</button> 
                    <div className="tabledivbtn">
                        <table>
                         
                            <tr>
                              <td>

                                    <p>Brexit</p>
                                    <div className="check-b holder2">
                                        <div>
                                        <input type="checkbox" id="Subscription" name="Subscription" value="Subscription"/>
                                        <label for="Subscription">Add Subscription</label>
                                       </div>
                                    </div>
                                    </td>
                                <td>
                                    <p>COVID-19</p>
                                    <div className="check-b holder2">
                                        <div>
                                        <input type="checkbox" id="Subscription1" name="Subscription1" value="Subscription1"/>
                                        <label for="Subscription1">Add Subscription</label>
                                       </div>
                                    </div>
                                </td>
                                <td>
                                    <p>Cryptocurrency and Blockchain</p>
                                    <div className="check-b holder2">
                                        <div>
                                        <input type="checkbox" id="Subscription2" name="Subscription2" value="Subscription2"/>
                                        <label for="Subscription2">Add Subscription</label>
                                       </div>
                                    </div>
                                </td>
                                <td>
                                    <p>Cyber Security</p>
                                    <div className="check-b holder2">
                                        <div>
                                        <input type="checkbox" id="Subscription3" name="Subscription3" value="Subscription3"/>
                                        <label for="Subscription3">Add Subscription</label>
                                       </div>
                                    </div>
                                </td>
                                <td>
                                    <p>ESG</p>
                                    <div className="check-b holder2">
                                        <div>
                                        <input type="checkbox" id="Subscription4" name="Subscription4" value="Subscription4"/>
                                        <label for="Subscription4">Add Subscription</label>
                                       </div>
                                    </div>
                                </td>
                                <td>
                                    <p>IBOR Transition</p>
                                    <div className="check-b holder2">
                                        <div>
                                        <input type="checkbox" id="Subscription6" name="Subscription6" value="Subscription6"/>
                                        <label for="Subscription6">Add Subscription</label>
                                       </div>
                                    </div>
                                </td>
                                <td>
                                    <p>Supply Chain </p>
                                    <div className="check-b holder2">
                                        <div>
                                        <input type="checkbox" id="Subscription7" name="Subscription7" value="Subscription7"/>
                                        <label for="Subscription7">Add Subscription</label>
                                       </div>
                                    </div>
                                </td>
                                <td>
                                    <p>Technology Innovation</p>
                                    <div className="check-b holder2">
                                        <div>
                                        <input type="checkbox" id="Subscription8" name="Subscription8" value="Subscription8"/>
                                        <label for="Subscription8">Add Subscription</label>
                                       </div>
                                    </div>
                                </td>
                                <td>
                                    <p>Workplace</p>
                                    <div className="check-b holder2">
                                        <div>
                                        <input type="checkbox" id="Subscription9" name="Subscription9" value="Subscription9"/>
                                        <label for="Subscription9">Add Subscription</label>
                                       </div>
                                    </div>
                                </td>
                                <td>
                                    <p>SPACs</p>
                                    <div className="check-b holder2">
                                        <div>
                                        <input type="checkbox" id="Subscription10" name="Subscription10" value="Subscription10"/>
                                        <label for="Subscription10">Add Subscription</label>
                                       </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                              <td colspan="10" className="tdbtm">
                                  <div className="alltypesub-both d-flex justify-content-between">

                                      <div className="alltypeinner1 d-flex">
                                        <div className="text">Subscribe to Content Type:</div>
                                         <div className="checkall d-flex">
                                                <div className="check-c">
                                                    <div className="holder2">
                                                        <div>
                                                            <input type="checkbox" name="Read" id="Read"/>
                                                            <label for="Read">Read </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="check-c">
                                                    <div className="holder2">
                                                        <div>
                                                            <input type="checkbox" name="Watch" id="Watch"/>
                                                            <label for="Watch">Watch </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="check-c">
                                            
                                                    <div className="holder2">
                                                        <div>
                                                            <input type="checkbox" name="Listen" id="Listen"/>
                                                            <label for="Listen">Listen </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="check-c">
                                                    <div className="holder2">
                                                        <div>
                                                            <input type="checkbox" name="TakePart" id="TakePart"/>
                                                            <label for="TakePart">Take Part </label>
                                                        </div>
                                                    </div>
                                                </div>
                                         </div>

                                      </div>
                                          
                                      <div className="alltypeinner2 d-flex">
                                        
                                         <div className="checkall2 d-flex">
                                                <div className="check-c div-check">
                                                    <div className="holder2">
                                                        <div>
                                                            <input type="checkbox" name="" id="Subscribeall"/>
                                                            <label for="Subscribeall">Subscribe to all </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="check-c div-textt">
                                                    <div className="text">Enter your email address to subscribe to our newsletters:</div>
                                                </div>
                                                <div className="check-c div-empty">
                                                   <div className="empty d-flex"><input type="text" className="styleinput"/> <img src="./img/arrory.png" alt=""/></div>
                                                </div>
                                                
                                         </div>

                                      </div>
                                           
                                  </div>
                              </td>
                        
                            </tr>
                          </table>
                    </div>
                    
                  </div>
                
              
                <div className="search">
                    <form className="search">
                        <input type="checkbox" id="toggleSearch" className="search__toggle" hidden />
                        <div className="search__field">
                            <label for="toggleSearch" className="search__label">
                                <span className="search__close"></span>
                            </label>
                            <input type="text" className="search__input" placeholder="Search.." />
                            <label for="toggleSearch" className="search__label">
                                
                                <button className="search__button search__button--submit">
                                    <div className="search__icon"><img src="./img/search.png" className="img-fluid" alt=""/></div>
                                </button>
                            </label>
                        </div>
                    </form>
                </div>    
                <div className="latest">
                    <span>Latest</span>
                </div>   
              </div>
              <div className="plusbtn">
                  
              </div>
        </div> 

<hr  style={{height:"2px",borderWidth:"0",color:"#fff",backgroundColor:"#fff"}}/>


</div>
<div className="sidenewsbtn">

<div className="sidebtn"><div className="innersidebtn">
    <div className="plus-same p-top">
        <div className="plusicon plusicon-1"><img src="./img/plusicon.png" alt=""/></div>
       <div className="plusicon plusicon-2"><img src="./img/plusicon.png" alt=""/></div>
   </div>
    <div className="plus-same p-bottom">
       <div className="plusicon plusicon-3"><img src="./img/plusicon.png" alt=""/></div>
       <div className="plusicon plusicon-4"><img src="./img/plusicon.png" alt=""/></div>
    </div>     
 </div></div>

 <div className="newsdiv">
     <div className="innernewsdiv">
         <h3>Latest Updates<span className="point">.</span></h3>
         <h4>Content from <span> Mayerbrown.com </span></h4>
         <div className="contentnews show">
             <h5>US CFTC Issues Further Technical No-Action Relief and Guidance for LIBOR Transition</h5>
             <div className="metas">
                  <div className="date"> <span>12/01/2022</span></div>
                  <div className="author"> <div className="imgwuthor"><img src="./img/author.png" alt=""/><span><b>Author </b></span></div></div>
                  <div className="btnmeta"><span> <b>IBOR Transition</b></span></div>
            </div>
             <p>A series of unique insights from guest speakers, addressing the top ten keynote risks in the coming 100 days. Led by Liz Stern, the Managing Partner of the Washington DC office, each episode delivers both commentary from leading matter experts and actionable takeaways that can help viewers mitigate the risks.</p>
             <p>A series of unique insights from guest speakers, addressing the top ten keynote risks in the coming 100 days. Led by Liz Stern, the Managing Partner of the Washington DC office, each episode delivers both commentary from leading matter experts and actionable takeaways that can help viewers mitigate the risks.</p>
             <p>A series of unique insights from guest speakers, addressing the top ten keynote risks in the coming 100 days. Led by Liz Stern, the Managing Partner of the Washington DC office, each episode delivers both commentary from leading matter experts and actionable takeaways that can help viewers mitigate the risks.</p>
             <p>A series of unique insights from guest speakers, addressing the top ten keynote risks in the coming 100 days. Led by Liz Stern, the Managing Partner of the Washington DC office, each episode delivers both commentary from leading matter experts and actionable takeaways that can help viewers mitigate the risks.</p>
         </div>
         <div className="contentnews">
            <h5>The Hong Kong Vaccine Bubble for the Catering Business – At A Glance</h5>
            <div className="metas">
                <div className="date"> <span>11/01/2022</span></div>
                <div className="author"> <div className="imgwuthor"><img src="./img/author.png" alt=""/><span><b>Author</b></span></div></div>
                <div className="btnmeta"><span> <b>Business and Human Rights</b> </span></div>
          </div>
            <p>A series of unique insights from guest speakers, addressing the top ten keynote risks in the coming 100 days. Led by Liz Stern, the Managing Partner of the Washington DC office, each episode delivers both commentary from leading matter experts and actionable takeaways that can help viewers mitigate the risks.</p>
        </div>
        <div className="contentnews">
            <h5>Global Banks on Trial US Prosecutions and the Remaking of International Finance</h5>
            <div className="metas">
                <div className="date"> <span>07/01/2022</span></div>
                <div className="author"> <div className="imgwuthor"><img src="./img/author.png" alt=""/><span><b>Author</b></span></div></div>
                <div className="btnmeta"><span> <b>Business and Human Rights</b> </span></div>
          </div>
            <p>A series of unique insights from guest speakers, addressing the top ten keynote risks in the coming 100 days. Led by Liz Stern, the Managing Partner of the Washington DC office, each episode delivers both commentary from leading matter experts and actionable takeaways that can help viewers mitigate the risks.</p>
        </div>
     </div>
 </div>
</div>

</div>   
</header>
</>
  )
}
export default Header;

