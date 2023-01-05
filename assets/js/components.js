// Create a class for the element
class VideoCard extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // attribute content 
    const img         = this.getAttribute('img');
    const video       = this.getAttribute('video');
    const author      = this.getAttribute('author');
    const title       = this.getAttribute('title'); 
    const url         = this.getAttribute('url');
    const description = this.getAttribute('description');        
    const length      = this.getAttribute('length');

    let card = `
          <!-- Video Card item START -->
            <div class="card shadow h-100">


              <!-- play button overlay -->
              <div class="position-relative">
                <img src="${img}" class="card-img-top" alt="course image">
                <div class="bg-overlay bg-dark opacity-6 rounded-3" class="card-img-top"></div>               
                <div class="card-img-overlay">
                  <div class="position-absolute top-50 start-50 translate-middle">
                              <div class="d-flex align-items-center justify-content-center">
                        <a href="https://www.youtube-nocookie.com/embed/${video}" class="btn btn-lg btn-round btn-white-shadow text-danger mb-0 overflow-visible glightbox3" style="font-size: 1.5rem;"> 
                          <i class="fas fa-play" style="font-size: 1.5rem;"></i>
                        </a>
                      </div>
                  </div>
                </div>
              </div>


              <!-- Card body -->
              <div class="card-body pb-0">
                <!-- Badge and favorite -->
                <div class="d-flex justify-content-between mb-2">
                  <a href="#" class="badge bg-success bg-opacity-10 text-success">${author}</a>
                  <a href="#" class="text-danger"><i class="fas fa-heart"></i></a>
                </div>
                <!-- Title -->
                <h5 class="card-title fw-normal"><a href="${url}">${title}</a></h5>
                <p class="mb-2 text-truncate-2">${description}</p>
              </div>
              <!-- Card footer -->
              <div class="card-footer pt-0 pb-3">
                <hr>
                <div class="d-flex justify-content-between">
                  <span class="h6 fw-light mb-0"><i class="far fa-clock text-danger me-2"></i>${length}</span>
                </div>
              </div>
            </div>
          <!-- Video Card item END -->
    `;


    this.innerHTML = card;    

  }
}

// Define the new element
customElements.define('mit-video-card', VideoCard);


// Create a class for the element
class CourseCard extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // attribute content 
    const img         = this.getAttribute('img');
    const level       = this.getAttribute('level');
    const title       = this.getAttribute('title');    
    const url         = this.getAttribute('url');
    const description = this.getAttribute('description');        
    const length      = this.getAttribute('length');

    let card = `
          <!-- Course Card item START -->
            <div class="card shadow h-100">
              <!-- Image -->
              <img src="${img}" class="card-img-top" alt="course image">
              <div class="card-body pb-0">
                <!-- Badge and favorite -->
                <div class="d-flex justify-content-between mb-2">
                  <a href="#" class="badge bg-success bg-opacity-10 text-success">${level}</a>
                  <a href="#" class="text-danger"><i class="fas fa-heart"></i></a>
                </div>
                <!-- Title -->
                <h5 class="card-title fw-normal"><a href="${url}">${title}</a></h5>
                <p class="mb-2 text-truncate-2">${description}</p>

              </div>
              <!-- Card footer -->
              <div class="card-footer pt-0 pb-3">
                <hr>
                <div class="d-flex justify-content-between">
                  <span class="h6 fw-light mb-0"><i class="fas fa-table text-orange me-2"></i>${length}</span>
                </div>
              </div>
            </div>
          <!-- Course Card item END -->
    `;


    this.innerHTML = card;    

  }
}

// Define the new element
customElements.define('mit-course-card', CourseCard);

/*
// Create a class for the element
class Module extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // attribute content 
    const title = this.getAttribute('title');

    this.innerHTML = `
        <div class="card">
          <h5 class="card-header">${title}</h5>
          <div class="card-body">
            ${this.innerHTML}
          </div>
        </div>
    `;    
  }
}

// Define the new element
customElements.define('mit-module', Module);
*/