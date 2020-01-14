import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import marked from "marked/lib/marked.esm";

import './style.css';

const App = () => {

    const getInitialState = `An h1 header
============

#h1
##h2
###h3
####h4

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**. Itemized lists
look like:

* this one
* that one
* the other one

Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.

An h2 header
------------

Here's a numbered list:

1. first item
2. second item
3. third item

Note again how the actual text starts at 4 columns in (4 characters
from the left side). 

Here's a code sample:

~~~
define foobar() {
print "Welcome to flavor country!";
}
~~~
You can optionally mark the
delimited block for Pandoc to syntax highlight it:

~~~python
import time
# Quick, count to ten!
for i in range(10):
# (but not *too* quick)
time.sleep(0.5)
print i
~~~

### An h3 header ###

#Linking
Here's a link to [a website](http://foo.bar), to a [local
doc](local-doc.html), and to a [section heading in the current
doc](#an-h2-header).


####An h4 heading
A horizontal rule follows.
***

And note that you can backslash-escape any punctuation characters
which you wish to be displayed literally, ex.: 'foo', *bar*, etc.`;

    const [value, setValue] = useState(getInitialState);

    const onInputChange = (value) => setValue(value);

    const getMarkdownText = (arg) => {
        const rawMarkup = marked(arg, {sanitize: true});
        return { __html: rawMarkup };
    };

    return (
        <div>
            <div className="jumbotron">
                <h1 className="title">Github Markdown Previewer</h1>
            </div>

            <div className="row">
                <div className="col">
                    <h3 className="title">Edit</h3>
                    <textarea
                        id="editor"
                        value={value}
                        onChange = { event => onInputChange(event.target.value)}
                    />
                </div>

                <div className="col">
                    <h3 className="title">Preview</h3>
                    <div
                        id="preview"
                        dangerouslySetInnerHTML={getMarkdownText(value)}
                    />
                </div>
            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#container'));
