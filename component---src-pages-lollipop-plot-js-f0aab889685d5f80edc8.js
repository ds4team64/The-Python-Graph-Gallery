(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"2mCb":function(e,a,t){},"59G+":function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var l=t("q1tI"),o=t.n(l),n=t("eynx"),i=t("JI6e"),r=t("Wbzz");function c(e){var a=e.imgName,t=e.caption,l=e.linkTo;return o.a.createElement(i.a,{xs:12,md:4},o.a.createElement(r.Link,{to:l},o.a.createElement(n.a,{imgName:a,caption:t})))}},DBSd:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return _}));var l=t("q1tI"),o=t.n(l),n=t("4/Vk"),i=t("7oih"),r=t("7vrA"),c=t("6+GL"),p=t("3Z9Z"),m=t("59G+"),s=t("pJaR"),u=t("Wbzz"),d=t("Hrqu"),h=t("eynx"),g=t("JI6e"),E=t("ZJrt"),f=t("gMBH");function _(){return o.a.createElement(i.a,{title:"Lollipop chart",isTocEnabled:!0,seoDescription:"A collection of lollipop plot examples made with Python, coming with explanation and reproducible code"},o.a.createElement(n.a,{title:"Lollipop plot",description:"<p>A <a href='https://www.data-to-viz.com/graph/lollipop.html'>lollipop chart</a> is an alernative to the more usual <a href='https://www.python-graph-gallery.com/barplot'>barplot</a>. <code>Python</code> allows to build lollipops thanks to the <code>matplotlib</code> library, as shown in the examples below. The strategy here is to use the <code>stem()</code> function or to hack the <code>vline()</code> function depending on your input format.</p>"}),o.a.createElement(r.a,null,o.a.createElement("h2",{id:"Quick"},"⏱ Quick start"),o.a.createElement(p.a,{className:"align-items-center"},o.a.createElement(g.a,{md:6},o.a.createElement("p",null,"A ",o.a.createElement("code",null,"lollipop plot")," displays each element of a dataset as a segment and a circle."),o.a.createElement("p",null," This is doable with ",o.a.createElement("code",null,"python")," and ",o.a.createElement("code",null,"Matplotlib")," thanks to the ",o.a.createElement("code",null,"stem()")," function that accepts a data frame as input.🔥")),o.a.createElement(g.a,{md:6},o.a.createElement(u.Link,{to:"/180-basic-lollipop-plot"},o.a.createElement(h.a,{imgName:"180_Basic_lolipop_plot2",caption:"Most basic lollipop plot with Python & Matplotlib."})))),o.a.createElement(E.a,null,"# Create a dataframe\nimport pandas as pd\ndf = pd.DataFrame({'group':list(map(chr, range(65, 85))), 'values':np.random.uniform(size=20) })\n\n# Reorder it following the values:\nordered_df = df.sort_values(by='values')\nmy_range=range(1,len(df.index)+1)\n\n# Make the plot\nplt.stem(ordered_df['values'])\nplt.xticks( my_range, ordered_df['group'])\n")),o.a.createElement(f.a,null),o.a.createElement(r.a,null,o.a.createElement("h2",{id:"Matplotlib"},o.a.createElement(d.b,null),"Lollipop plot with ",o.a.createElement("code",null,"Matplotlib")),o.a.createElement("p",null,o.a.createElement("code",null,"Matplotlib")," is probably the most famous and flexible python library for data visualization. It is appropriate to build any kind of chart, including the lollipop plot thanks to its ",o.a.createElement("code",null,"stem()")," function."),o.a.createElement(p.a,null,o.a.createElement(m.a,{imgName:"180_Basic_lolipop_plot",caption:"Most basic lollipop. Will get you started with any kind of input format",linkTo:"/180-basic-lollipop-plot"}),o.a.createElement(m.a,{imgName:"181_custom_lolliplot_2",caption:"Basic circle customizations: shape, size, color and more.",linkTo:"/181-custom-lollipop-plot"}),o.a.createElement(m.a,{imgName:"181_custom_lolliplot_3",caption:"Change lollipop baseline position.",linkTo:"/181-custom-lollipop-plot"}),o.a.createElement(m.a,{imgName:"182_vertical_lolipop_plot",caption:"Horizontal lollipop chart (more readable labels).",linkTo:"/182-vertical-lollipop-plot"}),o.a.createElement(m.a,{imgName:"183_highlight_a_group_in_lolipop_plot",caption:"Highlight some specific groups in a lollipop.",linkTo:"/183-highlight-a-group-in-lollipop"}),o.a.createElement(m.a,{imgName:"184_lolipop_plot_with_2_groups",caption:"Cleveland chart: a lollipop chart with 2 subgroups displayed under each row.",linkTo:"/184-lollipop-plot-with-2-groups"}),o.a.createElement(m.a,{imgName:"185_lolipop_plot_with_conditional_color",caption:"Lollipop chart with conditional colors.",linkTo:"/185-lollipop-plot-with-conditional-color"}))),o.a.createElement(f.a,null),o.a.createElement("div",{className:"greySection",id:"related"},o.a.createElement(r.a,null,o.a.createElement(s.a,{chartFamily:"ranking"}))),o.a.createElement(f.a,null),o.a.createElement(r.a,null,o.a.createElement(c.a,null)),o.a.createElement(f.a,null))}},eynx:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));t("2mCb");var l=t("q1tI"),o=t.n(l),n=t("Wbzz"),i=t("9eSz"),r=t.n(i),c=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function p(e){var a=e.imgName,t=e.caption;if(c.includes(a))return o.a.createElement("p",null,"TODO");var l=Object(n.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(a)}));return l?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"chartImageContainer"},o.a.createElement(r.a,{alt:a,fluid:l.node.childImageSharp.fluid,className:"chartImageImg"}),o.a.createElement("div",{className:"chartImageOverlay"},o.a.createElement("div",{className:"chartImageOverlayText"},o.a.createElement("p",null,t))))):null}}}]);
//# sourceMappingURL=component---src-pages-lollipop-plot-js-f0aab889685d5f80edc8.js.map