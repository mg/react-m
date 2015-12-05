# react-md

Material design components for ReactJS

Not an implementation of any specific version of material design, but will look towards the following sources:
- [Material Design](https://design.google.com/resources/?gclid=CjwKEAiAs4qzBRD4l-2w7qOoqEMSJABauikXlqi5poNSAuhaiDs8y2PUUymLmqExvHorRTwMj_VrFBoCt1_w_wcB)
- [Material Design Lite](http://www.getmdl.io/)
- [Polymer paper elements](https://elements.polymer-project.org/browse?package=paper-elements)
- [Angular Material](https://material.angularjs.org/latest/)

The design principles will be
- All components must be stateless. Some ephemeral state is acceptable for animation, but all other state must be hoisted and managed by whoever uses the components.
- All styles must be inline. Exceptions will be allowed to support pseudo elements, but the components must use as few CSS classes as possible.
- Even if inline, all styles must be customizable. The library will provide sensible defaults, but the user must be able to easily change what he needs.
- This library will be built with Webpack in mind. If you use it, you should use Webpack to build your application.
