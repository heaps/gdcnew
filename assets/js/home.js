// home - landing content 
// ----------------------------------

(function (){

    // get home div
    var home = document.getElementById('home');

    // html string
    var html = `
    <!-- Content START -->
    <div class="container">

        <!-- Title -->
        <div class="row align-items-center g-5">


            <!-- -------------- Left content START -------------- -->
            <div class="col-lg-5 col-xl-6 position-relative z-index-1 text-center text-lg-start mb-5 mb-sm-0">

                <!-- Title -->
                <h1 class="mb-0 display-6">MIT Geospatial Data Center</h1>
                
                <!-- Content -->
                <p class="my-2 lead">The MIT Geospatial Data Center is the uniting force of MIT's Intelligent Engineering Systems Laboratory, bringing together applied computation research in Data Science, Cybersecurity, Simulation, Augmented Reality, the Internet of Things (IOT), Blockchain, Digital Transformation, and Educational Technology (EdTech) Outreach.</p>
                
                <!-- links to other topics -->
                <mit-pills color="primary"></mit-pills>


                <!-- Info -->
                <ul class="list-inline position-relative justify-content-center justify-content-lg-start my-2">
                    <li class="list-inline-item me-2"> <i class="bi bi-patch-check-fill h6 me-1"></i>Research</li>
                    <li class="list-inline-item me-2"> <i class="bi bi-patch-check-fill h6 me-1"></i>Learn</li>
                    <li class="list-inline-item"> <i class="bi bi-patch-check-fill h6 me-1"></i>Donate</li>
                </ul>



                <div class="d-sm-flex align-items-center justify-content-center justify-content-lg-start">
                    <!-- Button -->
                    <a href="https://giving.mit.edu/form?fundId=3892672" class="btn btn-lg btn-orange-soft me-2 mb-4 mb-sm-0"> Donate</a>
                    <!-- Video button -->
                    <div class="d-flex align-items-center justify-content-center py-2 ms-0 ms-sm-4">
                        <a href="https://www.youtube.com/embed/L4EgZWh2sQ4" class="btn btn-round btn-primary-shadow mb-0 overflow-visible me-7 glightbox3"> 
                            <i class="fas fa-play"></i>
                            <h6 class="mb-0 ms-3 fw-normal position-absolute start-100 top-50 translate-middle-y">Watch video</h6>
                        </a>
                    </div>
                </div>


            </div>
            <!-- -------------- Left content END -------------- -->

            <!-- -------------- Right content START -------------- -->
            <div class="col-lg-7 col-xl-6 text-center position-relative">

                <div class="container">             
                                    
                            
                            <!-- Slider START -->
                            <div class="tiny-slider arrow-round arrow-blur arrow-hover rounded-3 overflow-hidden">
                                <div class="tiny-slider-inner" data-autoplay="false" data-gutter="0" data-arrow="true" data-dots="false" data-items="1">


                                    <!-- Card item START -->
                                    <div class="card overflow-hidden h-500px h-md-600px text-center rounded-0" style="background-image:url(assets/gdc/columns_blur.jpg); background-position: center left; background-size: cover;">
                                        <!-- Background dark overlay -->
                                        <div class="bg-overlay bg-dark opacity-6"></div>
                                                                        
                                        <!-- Card image overlay -->
                                        <div class="card-img-overlay d-flex align-items-center p-2 p-sm-4"> 
                                            <div class="w-100 my-auto">

                                                <h1 class="text-white display-6">MIT GDC</h1>

                                                <div class="row g-2">
                                                    <!-- Counter item -->
                                                    <div class="col px-4 my-2">
                                                        <a href="data.html">
                                                            <div class="d-flex justify-content-center align-items-center p-4 bg-warning bg-opacity-50 rounded-3">
                                                                <span class="display-6 lh-1 text-white mb-0"><i class="fas fa-solid fa-database"></i></span>
                                                                <div class="ms-4 h6 fw-normal mb-0 text-white">
                                                                    <div class="d-flex">
                                                                        <h5 class="text-white mb-0 fw-bold">Data</h5>
                                                                    </div>
                                                                    <p class="mb-0">AI, ML, Ops, Cloud</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>

                                                </div>
                                                <div class="row g-2">

                                                    <!-- Counter item -->
                                                    <div class="col px-4 my-2">
                                                        <a href="web3.html">
                                                            <div class="d-flex justify-content-center align-items-center p-4 bg-blue bg-opacity-50 rounded-3">
                                                                <span class="display-6 lh-1 text-white mb-0"><i class="fas fa-duotone fa-cubes"></i></span>
                                                                <div class="ms-4 h6 fw-normal mb-0 text-white">
                                                                    <div class="d-flex">
                                                                        <h5 class="text-white mb-0 fw-bold">Web3</h5>
                                                                    </div>
                                                                    <p class="mb-0">BC, DeFi, Metaverse</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>

                                                </div>
                                                <div class="row g-2">

                                                    <!-- Counter item -->
                                                    <div class="col px-4 my-2">
                                                        <a href="outreach.html">
                                                            <div class="d-flex justify-content-center align-items-center p-4 bg-info bg-opacity-50 rounded-3">
                                                                <span class="display-6 lh-1 text-white mb-0"><i class="fas fa-hands-helping"></i></span>
                                                                <div class="ms-4 h6 fw-normal mb-0 text-white">
                                                                    <div class="d-flex">
                                                                        <h5 class="text-white mb-0 fw-bold">Outreach</h5>
                                                                    </div>
                                                                    <p class="mb-0">Education Outreach</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>                                          

                                                <div class="row g-2">


                                                    <!-- Counter item -->
                                                    <div class="col px-4 my-2">
                                                        <a href="https://giving.mit.edu/form?fundId=3892672">
                                                            <div class="d-flex justify-content-center align-items-center p-4 bg-purple bg-opacity-50 rounded-3">
                                                                <span class="display-6 lh-1 text-white mb-0"><i class="fas fa-hand-holding-usd"></i></span>
                                                                <div class="ms-4 h6 fw-normal mb-0 text-white">
                                                                    <div class="d-flex">
                                                                        <h5 class="text-white mb-0 fw-bold">Donate</h5>
                                                                    </div>
                                                                    <p class="mb-0">Support GDC's Mission</p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>

                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                    <!-- Card item END -->                                  
                                    

                                    <!-- Card item START -->
                                    <div class="card overflow-hidden h-500px h-md-600px text-center rounded-0" style="background-image:url(assets/gdc/bp01_low2.jpg); background-position: center left; background-size: cover;">
                                        <!-- Background dark overlay -->
                                        <div class="bg-overlay bg-dark opacity-6"></div>
                                                                        
                                        <!-- Card image overlay -->
                                        <div class="card-img-overlay d-flex align-items-center p-2 p-sm-4"> 
                                            <div class="w-100 my-auto">
                                                <div class="row justify-content-center">
                                                    <div class="col-11 col-lg-7">
                                                        <!-- Title -->
                                                        <h1 class="text-white display-6">Discover Beautiful Patterns</h1>
                                                        <p class="text-white">GDC Outreach - Teaching computation to women in Latin America.
                                                            <a href="https://dreamers.mit.edu" class="link-warning">Project Information.</a> 
                                                        </p>
                                                        <!-- Button -->
                                                        <a href="https://www.youtube-nocookie.com/embed/TdjFj4CNvGM" class="btn btn-warning mb-0 glightbox3"><i class="fas fa-play-circle"></i> Video: Crazy Idea</a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Card item END -->
            

                                    <!-- Card item START -->
                                    <div class="card overflow-hidden h-500px h-md-600px text-center rounded-0" style="background-image:url(assets/images/bg/01.jpg); background-position: center left; background-size: cover;">
                                        <!-- Background dark overlay -->
                                        <div class="bg-overlay bg-dark opacity-6"></div>
                                                                        
                                        <!-- Card image overlay -->
                                        <div class="card-img-overlay d-flex align-items-center p-2 p-sm-4"> 
                                            <div class="w-100 my-auto">
                                                <div class="row justify-content-center">
                                                    <div class="col-11 col-lg-7">
                                                        <!-- Title -->
                                                        <h1 class="text-white display-6">Discover Lifelong Learning</h1>
                                                        <p class="text-white">This Bootstrap 5 based theme is ideal for all types of sites that offer education such as Kindergarten, School, College, University, Courses Hub, Training Center, or any Academy.</p>
                                                        <!-- Button -->
                                                        <a href="courses.html" class="btn btn-outline-white mb-0">Learn More</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Card item END -->                                  


                                </div>
                            </div>
                            <!-- Slider END -->

                            

                </div>
                
            </div>
            <!-- -------------- Right content END -------------- -->
        </div>
    </div>
    <!-- Content END -->
    `;


    // set html for home
    home.innerHTML = html;
})();

