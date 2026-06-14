import Title from "./Title";

function Contact() {
  return (
    <div id="contact" className="max-w-2xl mx-auto w-full pt-4 scroll-mt-28">
      <div className="bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm border border-slate-200/40 dark:border-slate-800/40 p-6 md:p-8 rounded-2xl shadow-sm">
        <form
          action="https://getform.io/f/a02c1052-a4bf-4f3f-bedd-c12cbe4ba7f0"
          method="POST"
          className="flex flex-col space-y-4"
        >
          <Title>Contact</Title>
          
          <div className="flex flex-col space-y-1">
            <input 
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full p-3 bg-slate-50/20 dark:bg-slate-950/20 backdrop-blur-sm border border-slate-200/30 dark:border-slate-800/30 rounded-xl text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all duration-200"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <input 
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-3 bg-slate-50/20 dark:bg-slate-950/20 backdrop-blur-sm border border-slate-200/30 dark:border-slate-800/30 rounded-xl text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all duration-200"
            />
          </div>

          <div className="flex flex-col space-y-1">
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="w-full p-3 bg-slate-50/20 dark:bg-slate-950/20 backdrop-blur-sm border border-slate-200/30 dark:border-slate-800/30 rounded-xl text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 transition-all duration-200 resize-none"
            />
          </div>

          <div className="pt-2">
            <button 
              type="submit"
              className="w-full md:w-auto px-8 py-3 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Connect with me
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;