import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm'

const Markdown = ({ markdown }) => {
  return <ReactMarkdown>{markdown}</ReactMarkdown>;
};

export default Markdown;
