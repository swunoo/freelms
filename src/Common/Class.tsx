import Quill from "quill"
import { useEffect, useRef } from "react"

export function SectionContentDisplay({content}: {content: string}){
    return(
        <div
            className="my-10"
            dangerouslySetInnerHTML={{ __html: content }}
        >
        </div>
    )
}

export function SectionContentEdit({content}: {content: string}){
    
    const div = document.createElement('div');
    const quillRef = useRef(div);

    useEffect(() => {

        const editor = document.createElement("div");
        quillRef.current.append(editor);

        const quill = new Quill(editor, {
            debug: 'error',
            modules: { toolbar: [
                ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                ['blockquote', 'code-block'],
              
                [{ 'header': 1 }, { 'header': 2 }],               // custom button values
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
                [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
                [{ 'direction': 'rtl' }],                         // text direction
              
                [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
              
                [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                [{ 'font': [] }],
                [{ 'align': [] }],
              
                ['clean']                                         // remove formatting button
              ]},
            readOnly: false,
            theme: 'snow'
          });

        return () => {
            quillRef.current = document.createElement('div');
        }
    }, [])

    return(
        <div
            className="my-10"
        >
            <div id="quill-container" className="bg-white shadow" ref={quillRef}>
            </div>
        </div>
    )
}