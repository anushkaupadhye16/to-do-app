const TitleComponent=()=>{
    return(<>
          <div className="container-fluid component">
          

          <div class="col-md-6  component">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative component1">
        <div class="col p-4 d-flex flex-column position-static">
        <h1><span>ORGANIZE</span><br/>ACHIEVE<br/>RELAX</h1><br/>
        <p>Turn clutter into clarity,chaos into control,and dreams into done, bold visions into market success</p>
            <div className="btn">
                <button type="button" className="btn btn-outline-warning get"><span>Get Started Today</span></button>
            
      
                
                <button type="button" className="btn btn-outline-warning learn">Discover Features</button>
                
                </div>
        </div>
        <img src="photo.jpg" className="title-img" alt="" />
        
      </div>
      
     
    </div>

  
</div>

    </>);
}
export default TitleComponent;