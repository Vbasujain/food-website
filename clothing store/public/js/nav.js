const createnav = ()=>{
    let nav = document.querySelector('.navbar');
    nav.html =` <nav class="navbar">
    <div class="nav">
      <img src="img\dark-logo.png" class="brlogo" alt="brandimg" width="100x" height="70px" style="border-top-right-radius: 30px; border-bottom-left-radius: 30px;">
    
      <div class="nav-items">
        <div class="search">
          <input type="text" class="search-box" name="srchbox" placeholder="search brand,accesories.." id="i1">
          <button class="search-btn">search</button>
        </div>
      </div>
    </div>
    
  </nav>
  `;
}

createnav();