const install = function (Vue, options) {
    Vue.mixin ({
      data () {
        return {
          device: '',
          breakpoints: {
            mobile: 768,
            tablet: 992,
            desktop: 1200,
            large: Infinity,
          },
        };
      },
      created () {
        if (options) this.breakpoints = options;
  
        this.device = this.checkDevice ();
  
        window.addEventListener ('resize', () => {
          this.device = this.checkDevice ();
        });
      },
      methods: {
        checkDevice () {
          return window.innerWidth <= this.breakpoints.mobile
            ? 'mobile'
            : window.innerWidth <= this.breakpoints.tablet
                ? 'tablet'
                : window.innerWidth <= this.breakpoints.desktop
                    ? 'desktop'
                    : 'large';
        },
      },
      computed: {
        $tvaMq () {
          return this.device;
        },
      },
    });
  };
  
  export default install;
  