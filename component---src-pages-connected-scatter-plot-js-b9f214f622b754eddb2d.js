(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"2mCb":function(e,t,a){},"59G+":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("q1tI"),l=a.n(n),c=a("eynx"),o=a("JI6e"),r=a("Wbzz");function i(e){var t=e.imgName,a=e.caption,n=e.linkTo;return l.a.createElement(o.a,{xs:12,md:4},l.a.createElement(r.Link,{to:n},l.a.createElement(c.a,{imgName:t,caption:a})))}},Jc3d:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return g}));var n=a("q1tI"),l=a.n(n),c=a("4/Vk"),o=a("7oih"),r=a("7vrA"),i=a("6+GL"),m=a("3Z9Z"),s=a("59G+"),p=a("pJaR"),d=a("Wbzz"),u=a("Hrqu"),h=a("JI6e"),E=a("cWnB"),b=a("ZJrt"),w=a("eynx"),f=a("gMBH");function g(){return l.a.createElement(o.a,{title:"Connected Scatterplot",isTocEnabled:!0,seoDescription:"A collection of connected scatterplot examples made with Python, coming with explanation and reproducible code"},l.a.createElement(c.a,{title:"Connected Scatterplot",description:"<p>A <a href='https://www.data-to-viz.com/graph/connectedscatter.html'>connected scatterplot</a> is a <a href='https://python-graph-gallery.com/line-chart/'>line chart</a> where each data point is shown by a circle or any type of marker. This section explains how to build a connected scatterplot with <code>Python</code>, using both the <code>Matplotlib</code> and the <code>Seaborn</code> libraries.</p>"}),l.a.createElement(r.a,null,l.a.createElement("h2",{id:"Quick"},"⏱ Quick start"),l.a.createElement(m.a,{className:"align-items-center"},l.a.createElement(h.a,{md:6},l.a.createElement("p",null,"TODO.🔥")),l.a.createElement(h.a,{md:6},l.a.createElement(d.Link,{to:"/132-basic-connected-scatterplot"},l.a.createElement(w.a,{imgName:"132_Matplotlib-connected-scatterplot",caption:"Basic connected scatterplot with Python and Seaborn."})))),l.a.createElement(b.a,null,'# library\nimport seaborn as sns\nimport pandas as pd\nimport numpy as np\n\n# Create a dataset\ndf = pd.DataFrame(np.random.random((5,5)), columns=["a","b","c","d","e"])\n\n# Default heatmap\np1 = sns.heatmap(df)\n'),l.a.createElement("br",null)),l.a.createElement(f.a,null),l.a.createElement("div",{className:"greySection"},l.a.createElement(r.a,null,l.a.createElement("h2",{id:"Warning"},"⚠️ Two types of connected scatterplot"),l.a.createElement("p",null,"There are two types of connected scatterplot, and it often creates confusion."),l.a.createElement("p",null,"The ",l.a.createElement("u",null,"first")," is simply a ",l.a.createElement(d.Link,{to:"/line-chart"},"lineplot")," with dots added on top of it. It takes as input 2 numeric variables only. The ",l.a.createElement("u",null,"second")," shows the relationship between 2 numeric variables across time. It requires 3 numeric variables as input."),l.a.createElement("p",null,"Confusing? Visit ",l.a.createElement("a",{href:"https://www.data-to-viz.com/graph/connectedscatter.html"},"data-to-viz")," to clarify.."),l.a.createElement("a",{href:"https://www.data-to-viz.com/graph/connectedscatter.html"},l.a.createElement(E.a,{size:"sm"},"Read more")))),l.a.createElement(f.a,null),l.a.createElement(r.a,null,l.a.createElement("h2",{id:"Seaborn"},l.a.createElement(u.e,null),"Connected scatterplot with ",l.a.createElement("code",null,"Seaborn")),l.a.createElement("p",null,"Building a connected scatterplot with ",l.a.createElement("code",null,"Seaborn")," looks pretty much the same as for a line chart, so feel free to visit the related section. Here are a few examples to remind the basics and understand how to customize the markers."),l.a.createElement(m.a,null,l.a.createElement(s.a,{imgName:"132_Matplotlib-connected-scatterplot",caption:"Basic connected scatterplot with Python and Seaborn.",linkTo:"/132-basic-connected-scatterplot"}))),l.a.createElement(f.a,null),l.a.createElement(r.a,null,l.a.createElement("h2",{id:"Matplotlib"},l.a.createElement(u.b,null),"Connected scatterplot with ",l.a.createElement("code",null,"Matplotlib")),l.a.createElement("p",null,"As for ",l.a.createElement(d.Link,{to:"/scatter-plot"},"scatterplots"),", ",l.a.createElement("code",null,"Matplotlib")," will help us build a bubble plot thanks to the the ",l.a.createElement("code",null,"plt.scatter()")," function. This function provides a ",l.a.createElement("code",null,"s")," parameter allowing to pass a third variable that will be mapped to the markers size."),l.a.createElement(m.a,null,l.a.createElement(s.a,{imgName:"106_seaborn_style_on_plt1",caption:"Basic connected scatterplot with Python and Matplotlib",linkTo:"/106-seaborn-style-on-matplotlib-plot"}),l.a.createElement(s.a,{imgName:"194_matplotlib_subplot6",caption:"Connected scatterplot on a split window",linkTo:"/194-split-the-graphic-window-with-subplot"}),l.a.createElement(s.a,{imgName:"122_Multiple_line_plot",caption:"How to customize line and markers with Matplotlib",linkTo:"/122-multiple-lines-chart"})),l.a.createElement("br",null),l.a.createElement("p",null,"Cheatsheet: line customization with ",l.a.createElement("code",null,"Matplotlib")," and the ",l.a.createElement("code",null,"linestyle")," parameter."),l.a.createElement("div",{style:{maxWidth:"350px"}},l.a.createElement(d.Link,{to:"/121-line-chart-customization"},l.a.createElement(w.a,{imgName:"121_Custom_line_plot4",caption:"Cheat sheet: line customization with matplotlib"})))),l.a.createElement(f.a,null),l.a.createElement(r.a,null,l.a.createElement("h2",{id:"Matplotlib"},l.a.createElement(u.b,null),"Connected scatterplot for 2 variables"),l.a.createElement("p",null,"As explained above, a connected scatterplot can also be base on 3 numeric variables. It allows to study the evolution of 2 variables (placed on the X and on the Y axis)."),l.a.createElement("div",{style:{maxWidth:"550px"}},l.a.createElement(d.Link,{to:"/connected-scatterplot-for-evolution"},l.a.createElement(w.a,{imgName:"connected-scatterplot-for-evolution",caption:"Connected scatterplot to show the evolution of 2 variables"})))),l.a.createElement(f.a,null),l.a.createElement("div",{className:"greySection",id:"related"},l.a.createElement(r.a,null,l.a.createElement(p.a,{chartFamily:"correlation"}))),l.a.createElement(f.a,null),l.a.createElement(r.a,null,l.a.createElement(i.a,null)),l.a.createElement(f.a,null))}},eynx:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));a("2mCb");var n=a("q1tI"),l=a.n(n),c=a("Wbzz"),o=a("9eSz"),r=a.n(o),i=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function m(e){var t=e.imgName,a=e.caption;if(i.includes(t))return l.a.createElement("p",null,"TODO");var n=Object(c.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(t)}));return n?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"chartImageContainer"},l.a.createElement(r.a,{alt:t,fluid:n.node.childImageSharp.fluid,className:"chartImageImg"}),l.a.createElement("div",{className:"chartImageOverlay"},l.a.createElement("div",{className:"chartImageOverlayText"},l.a.createElement("p",null,a))))):null}}}]);
//# sourceMappingURL=component---src-pages-connected-scatter-plot-js-b9f214f622b754eddb2d.js.map