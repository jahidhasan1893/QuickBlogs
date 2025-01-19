import Markdown from 'marked-react';

export default function BlogContent({content}:any){
    return (
        <div className="relative bg-white rounded-lg shadow-md p-10 mb-12">
                  <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                    Explore the Blog
                  </h2>
                  <div className="relative border-l-4 border-slate-700 pl-6 text-gray-700 space-y-4">
                    <Markdown>{content}</Markdown>
                  </div>
                </div>
    )
}