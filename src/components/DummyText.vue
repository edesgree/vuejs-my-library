<template>
  <div
    class="rounded-box bg-base-100 border-base-content/5 text-base-content not-prose grid gap-3 border p-6"
    data-theme="mytheme"
    style="
      --p: 47 100% 50%;
      --s: 0 0% 53%;
      --a: 175 70% 41%;
      --n: 218 18% 12%;
      --b1: 220 18% 20%;
      --in: 171 77% 64%;
      --su: 158 64% 52%;
      --wa: 43 96% 56%;
      --er: 0 91% 71%;
      --pf: 47 100% 30%;
      --sf: 0 0% 33%;
      --af: 174 70% 21%;
      --nf: 0 0% 0%;
      --b2: 220 18% 10%;
      --b3: 0 0% 0%;
      --bc: 222 5% 82%;
      --pc: 42 50% 13%;
      --sc: 145 0% 12%;
      --ac: 172 30% 11%;
      --nc: 220 3% 80%;
      --inc: 169 26% 14%;
      --suc: 152 31% 13%;
      --wac: 39 47% 13%;
      --erc: 3 29% 15%;
    "
  >
    <div class="grid grid-cols-2 gap-2 md:grid-cols-4">
      <button class="btn">Default</button> <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-accent">Accent</button> <button class="btn btn-info">Info</button>
      <button class="btn btn-success">Success</button>
      <button class="btn btn-warning">Warning</button> <button class="btn btn-error">Error</button>
    </div>
    <div class="grid grid-cols-2 place-items-center gap-2 md:grid-cols-4">
      <span class="badge">Default</span> <span class="badge badge-primary">Primary</span>
      <span class="badge badge-secondary">Secondary</span>
      <span class="badge badge-accent">Accent</span> <span class="badge badge-info">Info</span>
      <span class="badge badge-success">Success</span>
      <span class="badge badge-warning">Warning</span> <span class="badge badge-error">Error</span>
    </div>
    <div class="flex flex-col gap-3">
      <div class="flex flex-col gap-3 md:flex-row">
        <div class="md:w-1/2">
          <div class="tabs">
            <button class="tab tab-lifted">Tab</button>
            <button class="tab tab-lifted tab-active">Tab</button>
            <button class="tab tab-lifted">Tab</button>
          </div>
          <div class="flex flex-col">
            <span class="link">I'm a simple link</span>
            <span class="link link-primary">I'm a simple link</span>
            <span class="link link-secondary">I'm a simple link</span>
            <span class="link link-accent">I'm a simple link</span>
          </div>
        </div>
        <div class="flex flex-col gap-3 md:w-1/2">
          <progress value="20" max="100" class="progress">Default</progress>
          <progress value="25" max="100" class="progress progress-primary">Primary</progress>
          <progress value="30" max="100" class="progress progress-secondary">Secondary</progress>
          <progress value="40" max="100" class="progress progress-accent">Accent</progress>
          <progress value="45" max="100" class="progress progress-info">Info</progress>
          <progress value="55" max="100" class="progress progress-success">Success</progress>
          <progress value="70" max="100" class="progress progress-warning">Warning</progress>
          <progress value="90" max="100" class="progress progress-error">Error</progress>
        </div>
      </div>
      <div class="flex flex-col gap-3 md:flex-row">
        <div class="stats bg-base-300 border-base-300 border md:w-1/2">
          <div class="stat">
            <div class="stat-title">Total Page Views</div>
            <div class="stat-value">89,400</div>
            <div class="stat-desc">21% more than last month</div>
          </div>
        </div>
        <div class="flex flex-wrap items-center justify-center gap-3 md:w-1/2">
          <div class="radial-progress" style="--value: 60; --size: 3.5rem">60%</div>
          <div class="radial-progress" style="--value: 75; --size: 3.5rem">75%</div>
          <div class="radial-progress" style="--value: 90; --size: 3.5rem">90%</div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <div class="flex flex-col gap-3 md:flex-row">
        <div class="md:w-1/2">
          <div>
            <input type="checkbox" class="toggle" checked="" />
            <input type="checkbox" class="toggle toggle-primary" checked="" />
            <input type="checkbox" class="toggle toggle-secondary" checked="" />
            <input type="checkbox" class="toggle toggle-accent" checked="" />
          </div>
          <div>
            <input type="checkbox" class="checkbox" checked="" />
            <input type="checkbox" class="checkbox checkbox-primary" checked="" />
            <input type="checkbox" class="checkbox checkbox-secondary" checked="" />
            <input type="checkbox" class="checkbox checkbox-accent" checked="" />
          </div>
          <div>
            <input type="radio" name="radio-1" class="radio" checked="" />
            <input type="radio" name="radio-1" class="radio radio-primary" />
            <input type="radio" name="radio-1" class="radio radio-secondary" />
            <input type="radio" name="radio-1" class="radio radio-accent" />
          </div>
        </div>
        <div class="md:w-1/2">
          <input type="range" min="0" max="100" value="90" class="range range-xs" />
          <input type="range" min="0" max="100" value="70" class="range range-xs range-primary" />
          <input type="range" min="0" max="100" value="50" class="range range-xs range-secondary" />
          <input type="range" min="0" max="100" value="40" class="range range-xs range-accent" />
        </div>
      </div>
      <div class="flex flex-col gap-3 md:flex-row">
        <div class="flex flex-col gap-3 md:w-1/2">
          <input type="text" placeholder="Default" class="input input-bordered w-full" />
          <input
            type="text"
            placeholder="Primary"
            class="input input-primary input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Secondary"
            class="input input-secondary input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Accent"
            class="input input-accent input-bordered w-full"
          />
        </div>
        <div class="flex flex-col gap-3 md:w-1/2">
          <input type="text" placeholder="Info" class="input input-info input-bordered w-full" />
          <input
            type="text"
            placeholder="Success"
            class="input input-success input-bordered w-full"
          />
          <input
            type="text"
            placeholder="Warning"
            class="input input-warning input-bordered w-full"
          />
          <input type="text" placeholder="Error" class="input input-error input-bordered w-full" />
        </div>
      </div>
      <div class="navbar bg-neutral text-neutral-content rounded-box">
        <div class="flex-none">
          <button class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-5 w-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div class="flex-1"><button class="btn btn-ghost text-xl normal-case">daisyUI</button></div>
      </div>
      <div class="flex gap-3">
        <div class="flex flex-grow flex-col gap-3">
          <div class="text-4xl font-bold">Text Size 1</div>
          <div class="text-3xl font-bold">Text Size 2</div>
          <div class="text-2xl font-bold">Text Size 3</div>
          <div class="text-xl font-bold">Text Size 4</div>
          <div class="text-lg font-bold">Text Size 5</div>
          <div class="text-sm font-bold">Text Size 6</div>
          <div class="text-xs font-bold">Text Size 7</div>
        </div>
        <ul class="steps steps-vertical">
          <li class="step step-primary">Step 1</li>
          <li class="step step-primary">Step 2</li>
          <li class="step">Step 3</li>
          <li class="step">Step 4</li>
        </ul>
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <div class="alert">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="stroke-info h-6 w-6 flex-shrink-0"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>12 unread messages. Tap to see.</span>
        </div>
      </div>
      <div class="alert alert-info">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="h-6 w-6 flex-shrink-0 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>New software update available.</span>
        </div>
      </div>
      <div class="alert alert-success">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 flex-shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Your purchase has been confirmed!</span>
        </div>
      </div>
      <div class="alert alert-warning">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 flex-shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            ></path>
          </svg>
          <span>Warning: Invalid email address!</span>
        </div>
      </div>
      <div class="alert alert-error">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 flex-shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Error! Task failed successfully.</span>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-8 prose prose-slate mx-auto lg:prose-lg">
    <p class="lead">
      Until now, trying to style an article, document, or blog post with Tailwind has been a tedious
      task that required a keen eye for typography and a lot of complex custom CSS.
    </p>
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
      We hear you, but we're not convinced that simply disabling our base styles is what you really
      want. You don't want to have to remove annoying margins every time you use a
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
    <pre><code class="language-html">&lt;article class="prose"&gt;
  &lt;h1&gt;Garlic bread with cheese: What the science tells us&lt;/h1&gt;
  &lt;p&gt;
    For years parents have espoused the health benefits of eating garlic bread with cheese to their
    children, with the food earning such an iconic status in our culture that kids will often dress
    up as warm, cheesy loaf for Halloween.
  &lt;/p&gt;
  &lt;p&gt;
    But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
    springing up around the country.
  &lt;/p&gt;
  &lt;!-- ... --&gt;
&lt;/article&gt;
</code></pre>
    <p>
      For more information about how to use the plugin and the features it includes,
      <a href="https://github.com/tailwindcss/typography/blob/master/README.md"
        >read the documentation</a
      >.
    </p>
    <hr />
    <h2>What to expect from here on out</h2>
    <p>
      What follows from here is just a bunch of absolute nonsense I've written to dogfood the plugin
      itself. It includes every sensible typographic element I could think of, like
      <strong>bold text</strong>, unordered lists, ordered lists, code blocks, block quotes,
      <em>and even italics</em>.
    </p>
    <p>It's important to cover all of these use cases for a few reasons:</p>
    <ol>
      <li>We want everything to look good out of the box.</li>
      <li>Really just the first reason, that's the whole point of the plugin.</li>
      <li>
        Here's a third pretend reason though a list with three items looks more realistic than a
        list with two items.
      </li>
    </ol>
    <p>Now we're going to try out another header style.</p>
    <h3>Typography should be easy</h3>
    <p>
      So that's a header for you — with any luck if we've done our job correctly that will look
      pretty reasonable.
    </p>
    <p>Something a wise person once told me about typography is:</p>
    <blockquote>
      <p>
        Typography is pretty important if you don't want your stuff to look like trash. Make it good
        then it won't be bad.
      </p>
    </blockquote>
    <p>It's probably important that images look okay here by default as well:</p>
    <figure>
      <img
        src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"
        alt=""
      />
      <figcaption>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
        of classical Latin literature from 45 BC, making it over 2000 years old.
      </figcaption>
    </figure>
    <p>
      Now I'm going to show you an example of an unordered list to make sure that looks good, too:
    </p>
    <ul>
      <li>So here is the first item in this list.</li>
      <li>In this example we're keeping the items short.</li>
      <li>Later, we'll use longer, more complex list items.</li>
    </ul>
    <p>And that's the end of this section.</p>
    <h2>What if we stack headings?</h2>
    <h3>We should make sure that looks good, too.</h3>
    <p>
      Sometimes you have headings directly underneath each other. In those cases you often have to
      undo the top margin on the second heading because it usually looks better for the headings to
      be closer together than a paragraph followed by a heading should be.
    </p>
    <h3>When a heading comes after a paragraph …</h3>
    <p>
      When a heading comes after a paragraph, we need a bit more space, like I already mentioned
      above. Now let's see what a more complex list would look like.
    </p>
    <ul>
      <li>
        <p><strong>I often do this thing where list items have headings.</strong></p>
        <p>
          For some reason I think this looks cool which is unfortunate because it's pretty annoying
          to get the styles right.
        </p>
        <p>
          I often have two or three paragraphs in these list items, too, so the hard part is getting
          the spacing between the paragraphs, list item heading, and separate list items to all make
          sense. Pretty tough honestly, you could make a strong argument that you just shouldn't
          write this way.
        </p>
      </li>
      <li>
        <p><strong>Since this is a list, I need at least two items.</strong></p>
        <p>
          I explained what I'm doing already in the previous list item, but a list wouldn't be a
          list if it only had one item, and we really want this to look realistic. That's why I've
          added this second list item so I actually have something to look at when writing the
          styles.
        </p>
      </li>
      <li>
        <p><strong>It's not a bad idea to add a third item either.</strong></p>
        <p>
          I think it probably would've been fine to just use two items but three is definitely not
          worse, and since I seem to be having no trouble making up arbitrary things to type, I
          might as well include it.
        </p>
      </li>
    </ul>
    <p>
      After this sort of list I usually have a closing statement or paragraph, because it kinda
      looks weird jumping right to a heading.
    </p>
    <h2>Code should look okay by default.</h2>
    <p>
      I think most people are going to use <a href="https://highlightjs.org/">highlight.js</a> or
      <a href="https://prismjs.com/">Prism</a> or something if they want to style their code blocks
      but it wouldn't hurt to make them look <em>okay</em> out of the box, even with no syntax
      highlighting.
    </p>
    <p>
      Here's what a default <code>tailwind.config.js</code> file looks like at the time of writing:
    </p>
    <pre><code class="language-js">module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
</code></pre>
    <p>Hopefully that looks good enough to you.</p>
    <h3>What about nested lists?</h3>
    <p>
      Nested lists basically always look bad which is why editors like Medium don't even let you do
      it, but I guess since some of you goofballs are going to do it we have to carry the burden of
      at least making it work.
    </p>
    <ol>
      <li>
        <strong>Nested lists are rarely a good idea.</strong>
        <ul>
          <li>
            You might feel like you are being really "organized" or something but you are just
            creating a gross shape on the screen that is hard to read.
          </li>
          <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li>
          <li>Nesting tons of folders in your source code is also not helpful.</li>
        </ul>
      </li>
      <li>
        <strong>Since we need to have more items, here's another one.</strong>
        <ul>
          <li>I'm not sure if we'll bother styling more than two levels deep.</li>
          <li>Two is already too much, three is guaranteed to be a bad idea.</li>
          <li>If you nest four levels deep you belong in prison.</li>
        </ul>
      </li>
      <li>
        <strong>Two items isn't really a list, three is good though.</strong>
        <ul>
          <li>Again please don't nest lists if you want people to actually read your content.</li>
          <li>Nobody wants to look at this.</li>
          <li>I'm upset that we even have to bother styling this.</li>
        </ul>
      </li>
    </ol>
    <p>
      The most annoying thing about lists in Markdown is that <code>&lt;li&gt;</code> elements
      aren't given a child <code>&lt;p&gt;</code> tag unless there are multiple paragraphs in the
      list item. That means I have to worry about styling that annoying situation too.
    </p>
    <ul>
      <li>
        <p><strong>For example, here's another nested list.</strong></p>
        <p>But this time with a second paragraph.</p>
        <ul>
          <li>These list items won't have <code>&lt;p&gt;</code> tags</li>
          <li>Because they are only one line each</li>
        </ul>
      </li>
      <li>
        <p><strong>But in this second top-level list item, they will.</strong></p>
        <p>This is especially annoying because of the spacing on this paragraph.</p>
        <ul>
          <li>
            <p>
              As you can see here, because I've added a second line, this list item now has a
              <code>&lt;p&gt;</code> tag.
            </p>
            <p>This is the second line I'm talking about by the way.</p>
          </li>
          <li><p>Finally here's another list item so it's more like a list.</p></li>
        </ul>
      </li>
      <li><p>A closing list item, but with no nested list, because why not?</p></li>
    </ul>
    <p>And finally a sentence to close off this section.</p>
    <h2>There are other elements we need to style</h2>
    <p>
      I almost forgot to mention links, like
      <a href="https://tailwindcss.com">this link to the Tailwind CSS website</a>. We almost made
      them blue but that's so yesterday, so we went with dark gray, feels edgier.
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
          <td>Bret "The Hitman" Hart</td>
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
          <td>Razor's Edge</td>
        </tr>
      </tbody>
    </table>
    <p>
      We also need to make sure inline code looks good, like if I wanted to talk about
      <code>&lt;span&gt;</code> elements or tell you the good news about
      <code>@tailwindcss/typography</code>.
    </p>
    <h3>Sometimes I even use <code>code</code> in headings</h3>
    <p>
      Even though it's probably a bad idea, and historically I've had a hard time making it look
      good. This <em>"wrap the code blocks in backticks"</em> trick works pretty well though really.
    </p>
    <p>
      Another thing I've done in the past is put a <code>code</code> tag inside of a link, like if I
      wanted to tell you about the
      <a href="https://github.com/tailwindcss/docs"><code>tailwindcss/docs</code></a> repository. I
      don't love that there is an underline below the backticks but it is absolutely not worth the
      madness it would require to avoid it.
    </p>
    <h4>We haven't used an <code>h4</code> yet</h4>
    <p>
      But now we have. Please don't use <code>h5</code> or <code>h6</code> in your content, Medium
      only supports two heading levels for a reason, you animals. I honestly considered using a
      <code>before</code> pseudo-element to scream at you if you use an <code>h5</code> or
      <code>h6</code>.
    </p>
    <p>
      We don't style them at all out of the box because <code>h4</code> elements are already so
      small that they are the same size as the body copy. What are we supposed to do with an
      <code>h5</code>, make it <em>smaller</em> than the body copy? No thanks.
    </p>
    <h3>We still need to think about stacked headings though.</h3>
    <h4>Let's make sure we don't screw that up with <code>h4</code> elements, either.</h4>
    <p>
      Phew, with any luck we have styled the headings above this text and they look pretty good.
    </p>
    <p>
      Let's add a closing paragraph here so things end with a decently sized block of text. I can't
      explain why I want things to end that way but I have to assume it's because I think things
      will look weird or unbalanced if there is a heading too close to the end of the document.
    </p>
    <p>
      What I've written here is probably long enough, but adding this final sentence can't hurt.
    </p>
  </div>
</template>
