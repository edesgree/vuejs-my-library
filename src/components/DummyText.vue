<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Hello there</h1>
        <p class="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
          exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>

  <h1>Layout and Typography</h1>
  <p>How to use layouts and typography in daisyUI</p>
  <h2 id="">
    <a aria-hidden="true" tabindex="-1" href="#"
      ><span
        class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"
        >#</span
      ></a
    >Layout
  </h2>
  Layout, sizing, grids, spacing, etc. all will be handled by Tailwind CSS's utility classes. <br />
  Read more
  <ul>
    <li><a href="https://tailwindcss.com/docs/container" rel="nofollow">Layout</a></li>
    <li><a href="https://tailwindcss.com/docs/width" rel="nofollow">Sizing</a></li>
    <li><a href="https://tailwindcss.com/docs/flex" rel="nofollow">Flexbox</a></li>
    <li><a href="https://tailwindcss.com/docs/grid-template-columns" rel="nofollow">Grid</a></li>
    <li><a href="https://tailwindcss.com/docs/justify-content" rel="nofollow">Box alignment</a></li>
    <li><a href="https://tailwindcss.com/docs/padding" rel="nofollow">Spacing</a></li>
  </ul>
  <h2 id="-1">
    <a aria-hidden="true" tabindex="-1" href="#-1"
      ><span
        class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"
        >#</span
      ></a
    >Typography
  </h2>
  You should use official
  <a href="https://github.com/tailwindlabs/tailwindcss-typography">TailwindCSS Typography plugin</a
  >. It handles everything and it's fully customizable. daisyUI adds some style to
  @tailwindcss/typography so it will use the same theme as other elements.
  <div class="alert alert-info max-w-3xl text-sm not-prose">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      class="stroke-info-content flex-shrink-0 w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
    <p>
      Make sure you require <span class="badge badge-outline">daisyui</span> AFTER
      <span class="badge badge-outline">@tailwindcss/typography</span> in tailwind.config.js
    </p>
  </div>
  <pre
    class="language-js"
  ><code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">//...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"@tailwindcss/typography"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span></code></pre>
  <hr />
  <h3 id="-2">
    <a aria-hidden="true" tabindex="-1" href="#-2"
      ><span
        class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"
        >#</span
      ></a
    >Here you can see how elements will look using <code>@tailwindcss/typography</code>.:
  </h3>
  <div class="max-w-3xl my-20">
    <h1 id="heading-1">
      <a aria-hidden="true" tabindex="-1" href="#heading-1"
        ><span
          class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"
          >#</span
        ></a
      >Heading 1
    </h1>
    <h2 id="heading-2">
      <a aria-hidden="true" tabindex="-1" href="#heading-2"
        ><span
          class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"
          >#</span
        ></a
      >Heading 2
    </h2>
    <h3 id="heading-3">
      <a aria-hidden="true" tabindex="-1" href="#heading-3"
        ><span
          class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"
          >#</span
        ></a
      >Heading 3
    </h3>
    <h4 id="heading-4">
      <a aria-hidden="true" tabindex="-1" href="#heading-4"
        ><span
          class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"
          >#</span
        ></a
      >Heading 4
    </h4>
    <p>
      By default, Tailwind removes all of the default browser styling from paragraphs, headings,
      lists and more. This ends up being really useful for building application UIs because you
      spend less time undoing user-agent styles, but when you <em>really are</em> just trying to
      style some content that came from a rich-text editor in a CMS or a markdown file, it can be
      surprising and unintuitive.
    </p>
    <p>We get lots of complaints about it actually, with people regularly asking us things like:</p>
    <blockquote>
      <p>
        Why is Tailwind removing the default styles on my <code>h1</code> elements? How do I disable
        this? What do you mean I lose all the other base styles too?
      </p>
    </blockquote>
    <p>
      We hear you, but we’re not convinced that simply disabling our base styles is what you really
      want. You don’t want to have to remove annoying margins every time you use a
      <code>p</code> element in a piece of your dashboard UI. And I doubt you really want your blog
      posts to use the user-agent styles either — you want them to look <em>awesome</em>, not awful.
    </p>
    <p>
      The <code>@tailwindcss/typography</code> plugin is our attempt to give you what you
      <em>actually</em> want, without any of the downsides of doing something stupid like disabling
      our base styles.
    </p>
    <p>
      It adds a new <code>prose</code> class that you can slap on any block of vanilla HTML content
      and turn it into a beautiful, well-formatted document:
    </p>
    <pre
      class="language-html"
    ><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>prose<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Garlic bread with cheese: What the science tells us<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
    springing up around the country.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- ... --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span></code></pre>
    <p>
      For more information about how to use the plugin and the features it includes,
      <a href="https://github.com/tailwindcss/typography/blob/master/README.md" rel="nofollow"
        >read the documentation</a
      >.
    </p>
    <hr />
    <h2 id="what-to-expect-from-here-on-out">
      <a aria-hidden="true" tabindex="-1" href="#what-to-expect-from-here-on-out"
        ><span
          class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"
          >#</span
        ></a
      >What to expect from here on out
    </h2>
    <p>
      What follows from here is just a bunch of absolute nonsense I’ve written to dogfood the plugin
      itself. It includes every sensible typographic element I could think of, like
      <strong>bold text</strong>, unordered lists, ordered lists, code blocks, block quotes,
      <em>and even italics</em>.
    </p>
    <p>It’s important to cover all of these use cases for a few reasons:</p>
    <ol>
      <li>We want everything to look good out of the box.</li>
      <li>Really just the first reason, that’s the whole point of the plugin.</li>
      <li>
        Here’s a third pretend reason though a list with three items looks more realistic than a
        list with two items.
      </li>
    </ol>
    <p>Now we’re going to try out another header style.</p>
    <h3 id="typography-should-be-easy">
      <a aria-hidden="true" tabindex="-1" href="#typography-should-be-easy"
        ><span
          class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"
          >#</span
        ></a
      >Typography should be easy
    </h3>
    <p>
      So that’s a header for you — with any luck if we’ve done our job correctly that will look
      pretty reasonable.
    </p>
    <p>Something a wise person once told me about typography is:</p>
    <blockquote>
      <p>
        Typography is pretty important if you don’t want your stuff to look like trash. Make it good
        then it won’t be bad.
      </p>
    </blockquote>
    <p>It’s probably important that images look okay here by default as well:</p>
    <p><img src="/images/stock/photo-1560717789-0ac7c58ac90a.jpg" alt="Sample Image" /></p>
    <p>
      Now I’m going to show you an example of an unordered list to make sure that looks good, too:
    </p>
    <ul>
      <li>So here is the first item in this list.</li>
      <li>In this example we’re keeping the items short.</li>
      <li>Later, we’ll use longer, more complex list items.</li>
    </ul>
    <p>And that’s the end of this section.</p>
    <h2 id="what-if-we-stack-headings">
      <a aria-hidden="true" tabindex="-1" href="#what-if-we-stack-headings"
        ><span
          class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"
          >#</span
        ></a
      >What if we stack headings?
    </h2>
    <h3 id="we-should-make-sure-that-looks-good-too">
      <a aria-hidden="true" tabindex="-1" href="#we-should-make-sure-that-looks-good-too"
        ><span
          class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"
          >#</span
        ></a
      >We should make sure that looks good, too.
    </h3>
    <p>
      Sometimes you have headings directly underneath each other. In those cases you often have to
      undo the top margin on the second heading because it usually looks better for the headings to
      be closer together than a paragraph followed by a heading should be.
    </p>
    <h3 id="when-a-heading-comes-after-a-paragraph-">
      <a aria-hidden="true" tabindex="-1" href="#when-a-heading-comes-after-a-paragraph-"
        ><span
          class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"
          >#</span
        ></a
      >When a heading comes after a paragraph …
    </h3>
    <p>
      When a heading comes after a paragraph, we need a bit more space, like I already mentioned
      above. Now let’s see what a more complex list would look like.
    </p>
    <ul>
      <li>
        <p><strong>I often do this thing where list items have headings.</strong></p>
        <p>
          For some reason I think this looks cool which is unfortunate because it’s pretty annoying
          to get the styles right.
        </p>
        <p>
          I often have two or three paragraphs in these list items, too, so the hard part is getting
          the spacing between the paragraphs, list item heading, and separate list items to all make
          sense. Pretty tough honestly, you could make a strong argument that you just shouldn’t
          write this way.
        </p>
      </li>
      <li>
        <p><strong>Since this is a list, I need at least two items.</strong></p>
        <p>
          I explained what I’m doing already in the previous list item, but a list wouldn’t be a
          list if it only had one item, and we really want this to look realistic. That’s why I’ve
          added this second list item so I actually have something to look at when writing the
          styles.
        </p>
      </li>
      <li>
        <p><strong>It’s not a bad idea to add a third item either.</strong></p>
        <p>
          I think it probably would’ve been fine to just use two items but three is definitely not
          worse, and since I seem to be having no trouble making up arbitrary things to type, I
          might as well include it.
        </p>
      </li>
    </ul>
    <p>
      After this sort of list I usually have a closing statement or paragraph, because it kinda
      looks weird jumping right to a heading.
    </p>
    <h2 id="code-should-look-okay-by-default">
      <a aria-hidden="true" tabindex="-1" href="#code-should-look-okay-by-default"
        ><span
          class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"
          >#</span
        ></a
      >Code should look okay by default.
    </h2>
    <p>
      I think most people are going to use
      <a href="https://highlightjs.org/" rel="nofollow">highlight.js</a> or
      <a href="https://prismjs.com/" rel="nofollow">Prism</a> or something if they want to style
      their code blocks but it wouldn’t hurt to make them look <em>okay</em> out of the box, even
      with no syntax highlighting.
    </p>
    <p>
      Here’s what a default <code>tailwind.config.js</code> file looks like at the time of writing:
    </p>
    <pre
      class="language-js"
    ><code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">purge</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">extend</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">variants</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span></code></pre>
    <p>Hopefully that looks good enough to you.</p>
    <h3 id="what-about-nested-lists">
      <a aria-hidden="true" tabindex="-1" href="#what-about-nested-lists"
        ><span
          class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"
          >#</span
        ></a
      >What about nested lists?
    </h3>
    <p>
      Nested lists basically always look bad which is why editors like Medium don’t even let you do
      it, but I guess since some of you goofballs are going to do it we have to carry the burden of
      at least making it work.
    </p>
    <ol>
      <li>
        <strong>Nested lists are rarely a good idea.</strong>
        <ul>
          <li>
            You might feel like you are being really “organized” or something but you are just
            creating a gross shape on the screen that is hard to read.
          </li>
          <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li>
          <li>Nesting tons of folders in your source code is also not helpful.</li>
        </ul>
      </li>
      <li>
        <strong>Since we need to have more items, here’s another one.</strong>
        <ul>
          <li>I’m not sure if we’ll bother styling more than two levels deep.</li>
          <li>Two is already too much, three is guaranteed to be a bad idea.</li>
          <li>If you nest four levels deep you belong in prison.</li>
        </ul>
      </li>
      <li>
        <strong>Two items isn’t really a list, three is good though.</strong>
        <ul>
          <li>Again please don’t nest lists if you want people to actually read your content.</li>
          <li>Nobody wants to look at this.</li>
          <li>I’m upset that we even have to bother styling this.</li>
        </ul>
      </li>
    </ol>
    <p>
      The most annoying thing about lists in Markdown is that <code>&lt;li&gt;</code> elements
      aren’t given a child <code>&lt;p&gt;</code> tag unless there are multiple paragraphs in the
      list item. That means I have to worry about styling that annoying situation too.
    </p>
    <ul>
      <li>
        <p><strong>For example, here’s another nested list.</strong></p>
        <p>But this time with a second paragraph.</p>
        <ul>
          <li>These list items won’t have <code>&lt;p&gt;</code> tags</li>
          <li>Because they are only one line each</li>
        </ul>
      </li>
      <li>
        <p><strong>But in this second top-level list item, they will.</strong></p>
        <p>This is especially annoying because of the spacing on this paragraph.</p>
        <ul>
          <li>
            <p>
              As you can see here, because I’ve added a second line, this list item now has a
              <code>&lt;p&gt;</code> tag.
            </p>
            <p>This is the second line I’m talking about by the way.</p>
          </li>
          <li><p>Finally here’s another list item so it’s more like a list.</p></li>
        </ul>
      </li>
      <li><p>A closing list item, but with no nested list, because why not?</p></li>
    </ul>
    <p>And finally a sentence to close off this section.</p>
    <h2 id="there-are-other-elements-we-need-to-style">
      <a aria-hidden="true" tabindex="-1" href="#there-are-other-elements-we-need-to-style"
        ><span
          class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"
          >#</span
        ></a
      >There are other elements we need to style
    </h2>
    <p>
      I almost forgot to mention links, like
      <a href="https://tailwindcss.com" rel="nofollow">this link to the Tailwind CSS website</a>. We
      almost made them blue but that’s so yesterday, so we went with dark gray, feels edgier.
    </p>
    <p>We even included table styles, check it out:</p>
    <table>
      <thead>
        <tr>
          <th>Wrestler</th>
          <th>Origin</th>
          <th>Finisher</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Bret “The Hitman” Hart</td>
          <td>Calgary, AB</td>
          <td>Sharpshooter</td>
        </tr>
        <tr>
          <td>Stone Cold Steve Austin</td>
          <td>Austin, TX</td>
          <td>Stone Cold Stunner</td>
        </tr>
        <tr>
          <td>Randy Savage</td>
          <td>Sarasota, FL</td>
          <td>Elbow Drop</td>
        </tr>
        <tr>
          <td>Vader</td>
          <td>Boulder, CO</td>
          <td>Vader Bomb</td>
        </tr>
        <tr>
          <td>Razor Ramon</td>
          <td>Chuluota, FL</td>
          <td>Razor’s Edge</td>
        </tr>
      </tbody>
    </table>
    <p>
      We also need to make sure inline code looks good, like if I wanted to talk about
      <code>&lt;span&gt;</code> elements or tell you the good news about
      <code>@tailwindcss/typography</code>.
    </p>
    <h3 id="sometimes-i-even-use-code-in-headings">
      <a aria-hidden="true" tabindex="-1" href="#sometimes-i-even-use-code-in-headings"
        ><span
          class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"
          >#</span
        ></a
      >Sometimes I even use <code>code</code> in headings
    </h3>
    <p>
      Even though it’s probably a bad idea, and historically I’ve had a hard time making it look
      good. This <em>“wrap the code blocks in backticks”</em> trick works pretty well though really.
    </p>
    <p>
      Another thing I’ve done in the past is put a <code>code</code> tag inside of a link, like if I
      wanted to tell you about the
      <a href="https://github.com/tailwindcss/docs" rel="nofollow"><code>tailwindcss/docs</code></a>
      repository. I don’t love that there is an underline below the backticks but it is absolutely
      not worth the madness it would require to avoid it.
    </p>
    <h4 id="we-havent-used-an-h4-yet">
      <a aria-hidden="true" tabindex="-1" href="#we-havent-used-an-h4-yet"
        ><span
          class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"
          >#</span
        ></a
      >We haven’t used an <code>h4</code> yet
    </h4>
    <p>
      But now we have. Please don’t use <code>h5</code> or <code>h6</code> in your content, Medium
      only supports two heading levels for a reason, you animals. I honestly considered using a
      <code>before</code> pseudo-element to scream at you if you use an <code>h5</code> or
      <code>h6</code>.
    </p>
    <p>
      We don’t style them at all out of the box because <code>h4</code> elements are already so
      small that they are the same size as the body copy. What are we supposed to do with an
      <code>h5</code>, make it <em>smaller</em> than the body copy? No thanks.
    </p>
    <h3 id="we-still-need-to-think-about-stacked-headings-though">
      <a
        aria-hidden="true"
        tabindex="-1"
        href="#we-still-need-to-think-about-stacked-headings-though"
        ><span
          class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"
          >#</span
        ></a
      >We still need to think about stacked headings though.
    </h3>
    <h4 id="lets-make-sure-we-dont-screw-that-up-with-h4-elements-either">
      <a
        aria-hidden="true"
        tabindex="-1"
        href="#lets-make-sure-we-dont-screw-that-up-with-h4-elements-either"
        ><span
          class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1"
          >#</span
        ></a
      >Let’s make sure we don’t screw that up with <code>h4</code> elements, either.
    </h4>
    <p>
      Phew, with any luck we have styled the headings above this text and they look pretty good.
    </p>
    <p>
      Let’s add a closing paragraph here so things end with a decently sized block of text. I can’t
      explain why I want things to end that way but I have to assume it’s because I think things
      will look weird or unbalanced if there is a heading too close to the end of the document.
    </p>
    <p>
      What I’ve written here is probably long enough, but adding this final sentence can’t hurt.
    </p>
  </div>
  <div class="not-prose pb-10">
    <div class="bg-base-content/10 my-10 mx-1 h-px"></div>
    <div class="flex justify-between">
      <div>
        <a href="/theme-generator/" class="btn btn-sm md:btn-md gap-2 normal-case lg:gap-3"
          ><svg
            class="h-6 w-6 fill-current md:h-8 md:w-8"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z"></path>
          </svg>
          <div class="flex flex-col items-start">
            <span class="text-base-content/50 hidden text-xs font-normal md:block">Prev</span>
            <span>Theme Generator</span>
          </div></a
        >
      </div>
      <div>
        <a
          href="/components/button/"
          class="btn btn-neutral btn-sm md:btn-md gap-2 normal-case lg:gap-3"
          ><div class="flex flex-col items-end">
            <span class="text-neutral-content/50 hidden text-xs font-normal md:block">Next</span>
            <span>Button</span>
          </div>
          <svg
            class="h-6 w-6 fill-current md:h-8 md:w-8"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"></path></svg
        ></a>
      </div>
    </div>
    <div class="bg-base-content/10 my-10 mx-1 h-px"></div>
    <div class="flex flex-col justify-between gap-2 px-4 text-xs md:flex-row">
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <svg
            class="inline-block h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M12,21 C16.9705627,21 21,16.9705627 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,16.9705627 7.02943725,21 12,21 Z M12.0003283,16.9983464 C11.4478622,16.9983464 11,16.5506311 11,15.9983464 C11,15.4460616 11.4478622,14.9983464 12.0003283,14.9983464 C12.5527943,14.9983464 13.0006565,15.4460616 13.0006565,15.9983464 C13.0006565,16.5506311 12.5527943,16.9983464 12.0003283,16.9983464 Z M13,14 L11,14 C11,12.2983529 11.6245803,11.5696759 13.0527864,10.8555728 C13.8745803,10.4446759 14,10.2983529 14,9.5 C14,8.556407 13.2771608,8 12,8 C10.8954305,8 10,8.8954305 10,10 L8,10 C8,7.790861 9.790861,6 12,6 C14.2843464,6 16,7.32062807 16,9.5 C16,11.2016471 15.3754197,11.9303241 13.9472136,12.6444272 C13.1254197,13.0553241 13,13.2016471 13,14 Z"
            ></path>
          </svg>
          <div>
            Do you have a question?
            <a
              target="_blank"
              rel="noopener, noreferrer"
              class="link"
              href="https://github.com/saadeghi/daisyui/discussions"
              >ask the community</a
            >
          </div>
        </div>
        <div class="flex items-center gap-2">
          <svg
            class="inline-block h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 1792 1792"
          >
            <path
              d="M1696 960q0 26-19 45t-45 19h-224q0 171-67 290l208 209q19 19 19 45t-19 45q-18 19-45 19t-45-19l-198-197q-5 5-15 13t-42 28.5-65 36.5-82 29-97 13v-896h-128v896q-51 0-101.5-13.5t-87-33-66-39-43.5-32.5l-15-14-183 207q-20 21-48 21-24 0-43-16-19-18-20.5-44.5t15.5-46.5l202-227q-58-114-58-274h-224q-26 0-45-19t-19-45 19-45 45-19h224v-294l-173-173q-19-19-19-45t19-45 45-19 45 19l173 173h844l173-173q19-19 45-19t45 19 19 45-19 45l-173 173v294h224q26 0 45 19t19 45zm-480-576h-640q0-133 93.5-226.5t226.5-93.5 226.5 93.5 93.5 226.5z"
            ></path>
          </svg>
          <div>
            Do you see a bug?
            <a
              target="_blank"
              rel="noopener, noreferrer"
              class="link"
              href="https://github.com/saadeghi/daisyui/issues?q=Layout &amp; Typography"
              >open an issue on GitHub</a
            >
          </div>
        </div>
        <div class="flex items-center gap-2">
          <svg
            class="inline-block h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
            ></path>
          </svg>
          <div>
            Do you like daisyUI?
            <a
              target="_blank"
              rel="noopener, noreferrer"
              class="link"
              href="https://twitter.com/intent/tweet?text=daisyUI%20%0D%0AComponents%20for%20Tailwind%20CSS%20%0D%0Ahttps://daisyui.com"
              >tweet about it!</a
            >
          </div>
        </div>
        <div class="flex items-center gap-2">
          <svg
            class="inline-block h-4 w-4 fill-rose-500"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 512 512"
          >
            <path
              d="M256,448a32,32,0,0,1-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63,114.52,98.46,64,159.08,64c44.08,0,74.61,24.83,92.39,45.51a6,6,0,0,0,9.06,0C278.31,88.81,308.84,64,352.92,64,413.54,64,463.37,114.52,464,176.64c.54,54.21-18.63,104.26-58.61,153-18.77,22.87-52.8,59.45-131.39,112.8A32,32,0,0,1,256,448Z"
            ></path>
          </svg>
          <div>
            Support daisyUI's development:
            <a
              target="_blank"
              rel="noopener, noreferrer"
              class="link"
              href="https://opencollective.com/daisyui"
              >Open Collective</a
            >
          </div>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <svg
            class="inline-block h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
            ></path>
          </svg>
          <div>
            <a
              target="_blank"
              rel="noopener, noreferrer"
              class="link"
              href="https://github.com/saadeghi/daisyui/blob/master/src/docs/src/routes/docs/layout-and-typography/+page.svelte.md?plain=1"
              >Edit this page on GitHub</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="not-prose flex justify-center xl:hidden">
    <div class="flex flex-col gap-2">
      <h3 class="text-base-content/50 text-xs font-bold">Sponsors</h3>
      <div class="flex gap-2 flex-col sm:flex-row">
        <a
          href="https://bashsenpai.com/?ref=daisyui"
          target="_blank"
          rel="nofollow, noreferrer"
          class="flex w-[130px] flex-col items-center rounded bg-base-100 border-base-100 border-base-content/10 hover:border-base-content/20 border"
          ><svg
            class="mt-4"
            width="106"
            height="19"
            viewBox="0 0 106 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.236 11.229C6.236 10.791 6.149 10.446 5.975 10.194C5.807 9.936 5.567 9.753 5.255 9.645C4.949 9.537 4.589 9.483 4.175 9.483H2.96V12.849H4.049C4.337 12.849 4.61 12.828 4.868 12.786C5.132 12.744 5.366 12.666 5.57 12.552C5.78 12.438 5.942 12.276 6.056 12.066C6.176 11.85 6.236 11.571 6.236 11.229ZM5.768 6.009C5.768 5.517 5.612 5.163 5.3 4.947C4.994 4.725 4.517 4.614 3.869 4.614H2.96V7.503H3.959C4.595 7.503 5.054 7.386 5.336 7.152C5.624 6.918 5.768 6.537 5.768 6.009ZM9.278 11.346C9.278 12.066 9.14 12.663 8.864 13.137C8.588 13.611 8.21 13.983 7.73 14.253C7.25 14.523 6.701 14.715 6.083 14.829C5.471 14.943 4.826 15 4.148 15H0.00800003V2.526H3.959C4.601 2.526 5.207 2.58 5.777 2.688C6.353 2.79 6.863 2.964 7.307 3.21C7.751 3.45 8.099 3.777 8.351 4.191C8.609 4.599 8.738 5.106 8.738 5.712C8.738 6.21 8.633 6.642 8.423 7.008C8.213 7.368 7.934 7.665 7.586 7.899C7.238 8.127 6.86 8.292 6.452 8.394C6.896 8.466 7.334 8.607 7.766 8.817C8.204 9.021 8.564 9.327 8.846 9.735C9.134 10.143 9.278 10.68 9.278 11.346ZM19.099 12.246C19.099 12.606 19.147 12.867 19.243 13.029C19.345 13.191 19.507 13.314 19.729 13.398L19.144 15.27C18.58 15.216 18.103 15.093 17.713 14.901C17.329 14.703 17.026 14.406 16.804 14.01C16.438 14.448 15.97 14.775 15.4 14.991C14.83 15.201 14.248 15.306 13.654 15.306C12.67 15.306 11.884 15.027 11.296 14.469C10.714 13.905 10.423 13.182 10.423 12.3C10.423 11.262 10.828 10.461 11.638 9.897C12.454 9.333 13.6 9.051 15.076 9.051H16.363V8.691C16.363 8.193 16.201 7.824 15.877 7.584C15.559 7.344 15.091 7.224 14.473 7.224C14.167 7.224 13.774 7.269 13.294 7.359C12.814 7.443 12.334 7.566 11.854 7.728L11.197 5.838C11.815 5.604 12.457 5.427 13.123 5.307C13.795 5.187 14.395 5.127 14.923 5.127C16.345 5.127 17.395 5.418 18.073 6C18.757 6.576 19.099 7.41 19.099 8.502V12.246ZM14.635 13.272C14.941 13.272 15.262 13.182 15.598 13.002C15.934 12.816 16.189 12.555 16.363 12.219V10.671H15.661C14.869 10.671 14.287 10.794 13.915 11.04C13.543 11.28 13.357 11.634 13.357 12.102C13.357 12.468 13.468 12.756 13.69 12.966C13.918 13.17 14.233 13.272 14.635 13.272ZM25.6799 13.272C26.1539 13.272 26.5349 13.197 26.8229 13.047C27.1169 12.897 27.2639 12.672 27.2639 12.372C27.2639 12.168 27.2069 11.997 27.0929 11.859C26.9789 11.721 26.7599 11.589 26.4359 11.463C26.1119 11.337 25.6319 11.187 24.9959 11.013C24.4139 10.857 23.8979 10.659 23.4479 10.419C23.0039 10.179 22.6559 9.87 22.4039 9.492C22.1579 9.114 22.0349 8.643 22.0349 8.079C22.0349 7.509 22.1939 7.002 22.5119 6.558C22.8299 6.114 23.2979 5.766 23.9159 5.514C24.5339 5.256 25.2899 5.127 26.1839 5.127C27.0359 5.127 27.7769 5.238 28.4069 5.46C29.0429 5.676 29.5919 5.952 30.0539 6.288L28.9199 7.962C28.5239 7.716 28.0979 7.521 27.6419 7.377C27.1859 7.227 26.7269 7.152 26.2649 7.152C25.8029 7.152 25.4579 7.215 25.2299 7.341C25.0079 7.461 24.8969 7.644 24.8969 7.89C24.8969 8.052 24.9539 8.193 25.0679 8.313C25.1879 8.427 25.4099 8.547 25.7339 8.673C26.0579 8.793 26.5319 8.943 27.1559 9.123C27.7739 9.297 28.3109 9.498 28.7669 9.726C29.2289 9.954 29.5859 10.26 29.8379 10.644C30.0899 11.022 30.2159 11.523 30.2159 12.147C30.2159 12.843 30.0089 13.428 29.5949 13.902C29.1809 14.37 28.6319 14.721 27.9479 14.955C27.2639 15.189 26.5139 15.306 25.6979 15.306C24.7739 15.306 23.9579 15.174 23.2499 14.91C22.5419 14.646 21.9389 14.298 21.4409 13.866L22.8719 12.264C23.2439 12.552 23.6639 12.792 24.1319 12.984C24.6059 13.176 25.1219 13.272 25.6799 13.272ZM35.4829 1.365V6.387C35.8849 5.961 36.3199 5.646 36.7879 5.442C37.2619 5.232 37.7629 5.127 38.2909 5.127C39.1429 5.127 39.7939 5.376 40.2439 5.874C40.6939 6.372 40.9189 7.074 40.9189 7.98V15H38.0749V8.772C38.0749 8.196 38.0089 7.794 37.8769 7.566C37.7509 7.338 37.5109 7.224 37.1569 7.224C36.9589 7.224 36.7639 7.272 36.5719 7.368C36.3859 7.458 36.2029 7.59 36.0229 7.764C35.8429 7.938 35.6629 8.145 35.4829 8.385V15H32.6389V1.644L35.4829 1.365Z"
              class="fill-current"
            ></path>
            <path
              d="M52.3959 11.355C52.3959 12.129 52.1919 12.813 51.7839 13.407C51.3819 14.001 50.8029 14.466 50.0469 14.802C49.2909 15.138 48.3819 15.306 47.3199 15.306C46.1439 15.306 45.1569 15.135 44.3589 14.793C43.5669 14.445 42.9099 14.016 42.3879 13.506L43.8819 11.85C44.3439 12.252 44.8539 12.564 45.4119 12.786C45.9699 13.002 46.5819 13.11 47.2479 13.11C47.6619 13.11 48.0249 13.05 48.3369 12.93C48.6489 12.81 48.8919 12.636 49.0659 12.408C49.2399 12.18 49.3269 11.904 49.3269 11.58C49.3269 11.274 49.2579 11.016 49.1199 10.806C48.9819 10.596 48.7479 10.407 48.4179 10.239C48.0939 10.071 47.6409 9.9 47.0589 9.726C46.0869 9.426 45.3039 9.096 44.7099 8.736C44.1219 8.376 43.6929 7.959 43.4229 7.485C43.1589 7.011 43.0269 6.459 43.0269 5.829C43.0269 5.067 43.2369 4.416 43.6569 3.876C44.0829 3.336 44.6529 2.925 45.3669 2.643C46.0809 2.355 46.8669 2.211 47.7249 2.211C48.6909 2.211 49.5429 2.352 50.2809 2.634C51.0189 2.91 51.6579 3.306 52.1979 3.822L50.8029 5.424C50.3829 5.07 49.9299 4.809 49.4439 4.641C48.9579 4.467 48.4629 4.38 47.9589 4.38C47.5869 4.38 47.2599 4.428 46.9779 4.524C46.6959 4.614 46.4769 4.749 46.3209 4.929C46.1649 5.109 46.0869 5.334 46.0869 5.604C46.0869 5.868 46.1619 6.09 46.3119 6.27C46.4619 6.45 46.7229 6.621 47.0949 6.783C47.4669 6.939 47.9829 7.122 48.6429 7.332C49.4289 7.572 50.1009 7.86 50.6589 8.196C51.2229 8.526 51.6519 8.943 51.9459 9.447C52.2459 9.951 52.3959 10.587 52.3959 11.355ZM56.6908 11.049C56.7568 11.571 56.8918 11.994 57.0958 12.318C57.3058 12.636 57.5728 12.87 57.8968 13.02C58.2208 13.164 58.5838 13.236 58.9858 13.236C59.4238 13.236 59.8468 13.164 60.2548 13.02C60.6628 12.876 61.0558 12.684 61.4338 12.444L62.5768 13.992C62.1268 14.376 61.5808 14.691 60.9388 14.937C60.3028 15.183 59.5768 15.306 58.7608 15.306C57.6688 15.306 56.7538 15.09 56.0158 14.658C55.2778 14.22 54.7228 13.62 54.3508 12.858C53.9788 12.096 53.7928 11.22 53.7928 10.23C53.7928 9.288 53.9728 8.433 54.3328 7.665C54.6928 6.891 55.2178 6.276 55.9078 5.82C56.6038 5.358 57.4528 5.127 58.4548 5.127C59.3668 5.127 60.1558 5.322 60.8218 5.712C61.4938 6.102 62.0128 6.663 62.3788 7.395C62.7508 8.127 62.9368 9.006 62.9368 10.032C62.9368 10.194 62.9308 10.368 62.9188 10.554C62.9128 10.74 62.9008 10.905 62.8828 11.049H56.6908ZM58.4548 7.035C57.9448 7.035 57.5338 7.218 57.2218 7.584C56.9098 7.95 56.7208 8.535 56.6548 9.339H60.1648C60.1588 8.643 60.0238 8.085 59.7598 7.665C59.4958 7.245 59.0608 7.035 58.4548 7.035ZM65.0178 15V5.442H67.5018L67.6998 6.549C68.1258 6.069 68.5758 5.712 69.0498 5.478C69.5238 5.244 70.0638 5.127 70.6698 5.127C71.4858 5.127 72.1278 5.376 72.5958 5.874C73.0638 6.372 73.2978 7.074 73.2978 7.98V15H70.4538V8.799C70.4538 8.409 70.4268 8.1 70.3728 7.872C70.3188 7.638 70.2228 7.473 70.0848 7.377C69.9528 7.275 69.7698 7.224 69.5358 7.224C69.3378 7.224 69.1428 7.269 68.9508 7.359C68.7648 7.443 68.5818 7.566 68.4018 7.728C68.2218 7.89 68.0418 8.085 67.8618 8.313V15H65.0178ZM81.1028 5.127C81.9368 5.127 82.6088 5.334 83.1188 5.748C83.6288 6.162 84.0008 6.747 84.2348 7.503C84.4748 8.259 84.5948 9.156 84.5948 10.194C84.5948 11.178 84.4508 12.057 84.1628 12.831C83.8748 13.599 83.4578 14.205 82.9118 14.649C82.3658 15.087 81.7028 15.306 80.9228 15.306C79.9928 15.306 79.2368 14.973 78.6548 14.307V18.69L75.8108 18.987V5.442H78.3308L78.4568 6.513C78.8468 6.015 79.2728 5.661 79.7348 5.451C80.1968 5.235 80.6528 5.127 81.1028 5.127ZM80.2208 7.224C79.8908 7.224 79.5998 7.323 79.3478 7.521C79.0958 7.719 78.8648 7.989 78.6548 8.331V12.363C78.8528 12.657 79.0598 12.873 79.2758 13.011C79.4978 13.149 79.7588 13.218 80.0588 13.218C80.5628 13.218 80.9558 12.99 81.2378 12.534C81.5198 12.072 81.6608 11.304 81.6608 10.23C81.6608 9.438 81.6038 8.826 81.4898 8.394C81.3758 7.956 81.2108 7.653 80.9948 7.485C80.7788 7.311 80.5208 7.224 80.2208 7.224ZM94.6498 12.246C94.6498 12.606 94.6978 12.867 94.7938 13.029C94.8958 13.191 95.0578 13.314 95.2798 13.398L94.6948 15.27C94.1308 15.216 93.6538 15.093 93.2638 14.901C92.8798 14.703 92.5768 14.406 92.3548 14.01C91.9888 14.448 91.5208 14.775 90.9508 14.991C90.3808 15.201 89.7988 15.306 89.2048 15.306C88.2208 15.306 87.4348 15.027 86.8468 14.469C86.2648 13.905 85.9738 13.182 85.9738 12.3C85.9738 11.262 86.3788 10.461 87.1888 9.897C88.0048 9.333 89.1508 9.051 90.6268 9.051H91.9138V8.691C91.9138 8.193 91.7518 7.824 91.4278 7.584C91.1098 7.344 90.6418 7.224 90.0238 7.224C89.7178 7.224 89.3248 7.269 88.8448 7.359C88.3648 7.443 87.8848 7.566 87.4048 7.728L86.7478 5.838C87.3658 5.604 88.0078 5.427 88.6738 5.307C89.3458 5.187 89.9458 5.127 90.4738 5.127C91.8958 5.127 92.9458 5.418 93.6238 6C94.3078 6.576 94.6498 7.41 94.6498 8.502V12.246ZM90.1858 13.272C90.4918 13.272 90.8128 13.182 91.1488 13.002C91.4848 12.816 91.7398 12.555 91.9138 12.219V10.671H91.2118C90.4198 10.671 89.8378 10.794 89.4658 11.04C89.0938 11.28 88.9078 11.634 88.9078 12.102C88.9078 12.468 89.0188 12.756 89.2408 12.966C89.4688 13.17 89.7838 13.272 90.1858 13.272ZM103.238 5.442V13.056H105.668V15H97.6847V13.056H100.394V7.386H97.7747V5.442H103.238ZM101.519 0.438C102.011 0.438 102.413 0.591 102.725 0.897C103.037 1.203 103.193 1.584 103.193 2.04C103.193 2.496 103.037 2.88 102.725 3.192C102.413 3.498 102.011 3.651 101.519 3.651C101.021 3.651 100.613 3.498 100.295 3.192C99.9827 2.88 99.8267 2.496 99.8267 2.04C99.8267 1.584 99.9827 1.203 100.295 0.897C100.613 0.591 101.021 0.438 101.519 0.438Z"
              fill="#16A34A"
            ></path>
          </svg>
          <p class="text-base-content/50 w-full px-2.5 py-2 text-xs tracking-tighter">
            Never google <br />
            a command again
          </p></a
        >
      </div>
      <a
        href="https://opencollective.com/daisyui"
        target="_blank"
        rel="nofollow, noreferrer"
        class="text-base-content/50 hover:text-base-content/100 text-xs"
        >Become a sponsor</a
      >
    </div>
  </div>
</template>
