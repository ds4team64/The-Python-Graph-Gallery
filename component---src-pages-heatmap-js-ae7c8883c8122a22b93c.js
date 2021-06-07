(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"2mCb":function(e,a,t){},"59G+":function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t("q1tI"),o=t.n(n),r=t("eynx"),l=t("JI6e"),i=t("Wbzz");function m(e){var a=e.imgName,t=e.caption,n=e.linkTo;return o.a.createElement(l.a,{xs:12,md:4},o.a.createElement(i.Link,{to:n},o.a.createElement(r.a,{imgName:a,caption:t})))}},eynx:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));t("2mCb");var n=t("q1tI"),o=t.n(n),r=t("Wbzz"),l=t("9eSz"),i=t.n(l),m=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function c(e){var a=e.imgName,t=e.caption;if(m.includes(a))return o.a.createElement("p",null,"TODO");var n=Object(r.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(a)}));return n?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"chartImageContainer"},o.a.createElement(i.a,{alt:a,fluid:n.node.childImageSharp.fluid,className:"chartImageImg"}),o.a.createElement("div",{className:"chartImageOverlay"},o.a.createElement("div",{className:"chartImageOverlayText"},o.a.createElement("p",null,t))))):null}},wyKO:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return w}));var n=t("q1tI"),o=t.n(n),r=t("4/Vk"),l=t("7oih"),i=t("7vrA"),m=t("6+GL"),c=t("3Z9Z"),s=t("59G+"),h=t("pJaR"),p=t("Wbzz"),d=t("Hrqu"),u=t("JI6e"),E=t("cWnB"),g=t("ZJrt"),b=t("eynx"),f=t("gMBH");function w(){return o.a.createElement(l.a,{title:"Heatmap",isTocEnabled:!0,seoDescription:"A collection of heatmap examples made with Python, coming with explanation and reproducible code"},o.a.createElement(r.a,{title:"Heatmap",description:"<p>A <a href='https://www.data-to-viz.com/graph/heatmap.html'>heatmap</a> is a graphical representation of data where each value of a matrix is represented as a color. This page explains how to build a heatmap with <code>Python</code>, with an emphasis on the <code>Seaborn</code> library.</p>"}),o.a.createElement(i.a,null,o.a.createElement("h2",{id:"Quick"},"⏱ Quick start"),o.a.createElement(c.a,{className:"align-items-center"},o.a.createElement(u.a,{md:6},o.a.createElement("p",null,"If you're in a rush and want to make a heatmap with ",o.a.createElement("code",null,"Python")," as quick as possible, have a look to this code snippet that uses the ",o.a.createElement("code",null,"heatmap()")," function of ",o.a.createElement("code",null,"Seaborn"),".🔥")),o.a.createElement(u.a,{md:6},o.a.createElement(p.Link,{to:"/90-heatmaps-with-various-input-format"},o.a.createElement(b.a,{imgName:"90_Input_format_for_heatmap1",caption:"Basic heatmap with Python and Seaborn from various data input formats."})))),o.a.createElement(g.a,null,'# library\nimport seaborn as sns\nimport pandas as pd\nimport numpy as np\n\n# Create a dataset\ndf = pd.DataFrame(np.random.random((5,5)), columns=["a","b","c","d","e"])\n\n# Default heatmap\np1 = sns.heatmap(df)\n'),o.a.createElement("br",null)),o.a.createElement(f.a,null),o.a.createElement(i.a,null,o.a.createElement("h2",{id:"Seaborn"},o.a.createElement(d.e,null),"Heatmap with ",o.a.createElement("code",null,"Seaborn")),o.a.createElement("p",null,o.a.createElement("code",null,"Seaborn")," is a python library allowing to make better charts easily thanks to its ",o.a.createElement("code",null,"heatmap()")," function. This section starts with a post describing the basic usage of the function based on any kind of data input. Next it will guide you through the different ways to customize the chart, like ",o.a.createElement(p.Link,{to:""},"controling color")," and ",o.a.createElement(p.Link,{to:""},"data normalization"),"."),o.a.createElement(c.a,null,o.a.createElement(s.a,{imgName:"90_Input_format_for_heatmap1",caption:"The heatmap() function and how to apply it to any kind of data input",linkTo:"/90-heatmaps-with-various-input-format"}),o.a.createElement(s.a,{imgName:"90_Input_format_for_heatmap2bis",caption:"Plotting only one half of the heatmap",linkTo:"/90-heatmaps-with-various-input-format"}),o.a.createElement(s.a,{imgName:"91_Custom_heat_control_lines",caption:"Seaborn heatmap customization: grid",linkTo:"/91-customize-seaborn-heatmap"}),o.a.createElement(s.a,{imgName:"91_Custom_heat_annotate_cells",caption:"Seaborn heatmap customization: show numbers in cell",linkTo:"/91-customize-seaborn-heatmap"}),o.a.createElement(s.a,{imgName:"91_Custom_heat_hide_colorbar",caption:"Seaborn heatmap customization: hide the color bar",linkTo:"/91-customize-seaborn-heatmap"}),o.a.createElement(s.a,{imgName:"92_Control_color_heatmap1",caption:"Color customization: how to select other color palettes and more",linkTo:"/92-control-color-in-seaborn-heatmaps"}))),o.a.createElement(f.a,null),o.a.createElement("div",{className:"greySection"},o.a.createElement(i.a,null,o.a.createElement("h2",{id:"Warning"},"⚠️ Python heatmap and normalization"),o.a.createElement("p",null,"Consider the left heatmap below. The second column from the left (",o.a.createElement("code",null,"variable 1"),") has very high values compared to others. As a result, the variation existing in other variables is hidden."),o.a.createElement("p",null,"Highlighting the ",o.a.createElement("code",null,"variable 1")," can be the main message of your chart. But if you're interested in other variable variations as well, you probably want to apply some normalization as shown on the right heatmap."),o.a.createElement("p",null,"If you want to no more about normalization, check ",o.a.createElement("a",{href:"https://www.data-to-viz.com/graph/heatmap.html"},"data-to-viz.com"),". If you want some python code to do it, ",o.a.createElement(p.Link,{to:"/94-use-normalization-on-seaborn-heatmap"},"it's here"),"."),o.a.createElement(c.a,null,o.a.createElement(s.a,{imgName:"94_Heatmap_Normalization_Seaborn1",caption:"A heatmap that probably needs to be normalized.",linkTo:"/94-use-normalization-on-seaborn-heatmap"}),o.a.createElement(s.a,{imgName:"94_Heatmap_Normalization_Seaborn2",caption:"The exact same heatmap after normalization",linkTo:"/94-use-normalization-on-seaborn-heatmap"})),o.a.createElement(p.Link,{to:"/94-use-normalization-on-seaborn-heatmap"},o.a.createElement(E.a,{size:"sm"},"Code and explanation")))),o.a.createElement(f.a,null),o.a.createElement(i.a,null,o.a.createElement("h2",{id:"Clustering"},"❄ Python, Heatmap and Clustering"),o.a.createElement("p",null,"It is very common to apply some ",o.a.createElement("code",null,"clustering")," techniques on a heatmap. The idea is to group items that have the same kind of pattern for their numeric variables. 💡"),o.a.createElement("p",null,"Usually, it is recommended to display a ",o.a.createElement("code",null,"dendrogram")," on top of the heatmap to explain how the clusterization has been performed. Last but not least, it can be useful to compare the grouping we got with an expected structure, shown as an additional color."),o.a.createElement(p.Link,{to:"/dendrogram"},o.a.createElement(E.a,{size:"sm"},"Related: dendrogram section")),o.a.createElement(p.Link,{to:"/405-dendrogram-with-heatmap-and-coloured-leaves"},o.a.createElement(E.a,{size:"sm"},"Code and explanation")),o.a.createElement("div",{style:{maxWidth:"600px",margin:"0 auto",padding:30}},o.a.createElement(p.Link,{to:"/405-dendrogram-with-heatmap-and-coloured-leaves"},o.a.createElement(b.a,{imgName:"405_Dendro_and_heatmap_and_rowcolor",caption:"A seaborn heatmap with clusterization and dendrogram applied"}))),o.a.createElement(c.a,null,o.a.createElement(s.a,{imgName:"404_Dendro_and_heatmap3",caption:"Most basic heatmap with dendrogram with seaborn",linkTo:"/404-dendrogram-with-heat-map"}),o.a.createElement(s.a,{imgName:"404_Dendro_and_heatmap9",caption:"Change color palette",linkTo:"/404-dendrogram-with-heat-map"}),o.a.createElement(s.a,{imgName:"404_Dendro_and_heatmap11",caption:"Learn how to normalize data in the heatmap, avoiding that kind of result",linkTo:"/404-dendrogram-with-heat-map"}))),o.a.createElement(f.a,null),o.a.createElement("div",{className:"greySection",id:"related"},o.a.createElement(i.a,null,o.a.createElement(h.a,{chartFamily:"correlation"}))),o.a.createElement(f.a,null),o.a.createElement(i.a,null,o.a.createElement(m.a,null)),o.a.createElement(f.a,null))}}}]);
//# sourceMappingURL=component---src-pages-heatmap-js-ae7c8883c8122a22b93c.js.map