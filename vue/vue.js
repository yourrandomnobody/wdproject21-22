const app = Vue.createApp({
    data() {
      return {
        members: [
          {
            id: "1",
            name: "Benedikt Guderson",
            phone: "062/452-46-82",
            email: "guderson@gmail.com",
            image: "https://i.pravatar.cc/300?img=11",
          },
          {
            id: "2",
            name: "Hašim Beljulji",
            phone: "061/235-34-92",
            email: "beljulji@gmail.com",
            image: "https://i.pravatar.cc/300?img=8",
          },
          {
            id: "3",
            name: "Ben Đonson",
            phone: "061/148-55-67",
            email: "davis@gmail.com",
            image: "https://i.pravatar.cc/300?img=3",
          },
          {
            id: "4",
            name: "Vahid Uglić",
            phone: "063/333-33-33",
            email: "walje@yahoo.com",
            image: "https://i.pravatar.cc/300?img=4",
          },
        ],
        counter: 0,
        donateVisible: false,
        thanks: false,
      };
    },
    methods: {
      add(num) {
        if (!this.thanks) {
          if (this.counter == 0) {
            this.toggleDonate();
          }
          if (this.counter + num <= 1000) {
            this.counter = this.counter + num;
          } else {
            this.counter = 1000;
          }
        }
      },
      reduce(num) {
        if (!this.thanks) {
          let temp = this.counter;
          if (this.counter - num >= 0) {
            this.counter = this.counter - num;
          } else {
            this.counter = 0;
          }
          if (this.counter == 0 && temp != 0) {
            this.toggleDonate();
          }
        }
      },
      donate() {
        this.toggleDonate();
        this.toggleThanks();
      },
      toggleDonate() {
        this.donateVisible = !this.donateVisible;
      },
      toggleThanks() {
        this.thanks = !this.thanks;
        setTimeout(() => {
          this.thanks = !this.thanks;
          this.counter = 0;
        }, 3000);
      },
    },
  });
  
  app.component("member", {
    props: ["name", "phone", "email", "image"],
    template: `
    <li>
      <h2>{{ name }}</h2>
      <ul v-if="detailsAreVisible" class="inner">
      <li><img :src='image' /></li>
        <li><i class="fas fa-phone-alt"></i> &nbsp;&nbsp; {{ phone }}</li>
        <li><i class="fas fa-envelope"></i> &nbsp;&nbsp; {{ email }}</li>
        
      </ul>
      <button @click="toggleDetails()">
        {{ detailsAreVisible ? (title == 'Our team' ? 'Hide' : 'Sakrij') : (title == 'Our team' ? 'Show' : 'Prikaži') }}  {{ title == 'Our team' ? 'details' : 'detalje' }}
      </button>
      
    </li>
    `,
    data() {
      return {
        detailsAreVisible: false,
        title: document.title,
      };
    },
  
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      },
    },
  });
  
  app.mount("#app");
  