<template>
	<div class="wrapper">
		<header>
			<mHeader/>
		</header>
		<main>
			<nuxt/>
		</main>
		<footer>
			<mFooter/>
		</footer>
	</div>
</template>

<style lang="stylus">
code[class*="language-"],
pre[class*="language-"] {
	color: black;
	background: none;
	text-shadow: 0 1px white;
	font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;
	tab-size: 4;
	hyphens: none;
}

pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
	text-shadow: none;
	background: #b3d4fc;
}

pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
code[class*="language-"]::selection, code[class*="language-"] ::selection {
	text-shadow: none;
	background: #b3d4fc;
}

@media print {
	code[class*="language-"],
	pre[class*="language-"] {
		text-shadow: none;
	}
}

/* Code blocks */
pre[class*="language-"] {
	padding: 1em;
	margin: .5em 0;
	overflow: auto;
}

:not(pre) > code[class*="language-"],
pre[class*="language-"] {
	background: #f5f2f0;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
	padding: .1em;
	border-radius: .3em;
	white-space: normal;
}
.prism-comment,
.prism-prolog,
.prism-doctype,
.prism-cdata {
	color: slategray;
}

.prism-punctuation {
	color: #999;
}

.namespace {
	opacity: .7;
}

.prism-property,
.prism-tag,
.prism-boolean,
.prism-number,
.prism-constant,
.prism-symbol,
.prism-deleted {
	color: #905;
}

.prism-selector,
.prism-attr-name,
.prism-string,
.prism-char,
.prism-builtin,
.prism-inserted {
	color: #690;
}

.prism-operator,
.prism-entity,
.prism-url,
.language-css .prism-string,
.style .prism-string {
	color: #9a6e3a;
	background: hsla(0, 0%, 100%, .5);
}

.prism-atrule,
.prism-attr-value,
.prism-keyword {
	color: #07a;
}

.prism-function,
.prism-class-name {
	color: #DD4A68;
}

.prism-regex,
.prism-important,
.prism-variable {
	color: #e90;
}

.prism-important,
.prism-bold {
	font-weight: bold;
}
.prism-italic {
	font-style: italic;
}

.prism-entity {
	cursor: help;
}
header{
  box-shadow: 0px 0px 5px 1px
}
main{
  padding: 2rem
}
ul li{
  list-style none 
} 
</style>

<script>
  import mHeader from '~/components/Header.vue'
  import mFooter from '~/components/Footer.vue'
  export default {
    components: {
      mHeader, mFooter
    }
  }
</script>
