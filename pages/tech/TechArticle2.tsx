import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Copy, Check, ArrowLeft, Mail, Table } from 'lucide-react';
import { Link } from 'react-router-dom';

const CodeBlock: React.FC<{ code: string; lang?: string }> = ({ code, lang = 'javascript' }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative border-2 border-black dark:border-white bg-black text-white p-6 my-6 shadow-brutal-sm font-mono text-sm overflow-x-auto">
      <div className="absolute top-0 right-0 p-2">
        <button 
          onClick={handleCopy}
          className="flex items-center gap-1 text-xs uppercase font-bold text-gray-400 hover:text-brand-teal transition-colors"
        >
          {copied ? <Check size={14} /> : <Copy size={14} />}
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre><code>{code}</code></pre>
    </div>
  );
};

export const TechArticle2: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Breadcrumb */}
        <Link to="/tech" className="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase mb-8 hover:text-brand-teal">
          <ArrowLeft size={16} /> Back to Tech Hub
        </Link>

        {/* Header */}
        <div className="border-b-4 border-black dark:border-white pb-8 mb-12">
          <div className="inline-block px-2 py-1 bg-brand-teal text-white border border-black dark:border-white font-mono text-xs font-bold uppercase mb-4">
            Intermediate Tutorial
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase leading-none mb-6">
            Email to Sheets: <br/><span className="text-brand-amber">Automate Your Intake</span>
          </h1>
          <p className="font-mono text-lg text-gray-600 dark:text-gray-400">
            Stop manually copying data from "Contact Us" emails into your case tracker. Let's write a script that does it for you every hour.
          </p>
        </div>

        {/* Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none font-mono">
          
          <div className="bg-brand-gray dark:bg-zinc-900 border-2 border-black dark:border-white p-6 mb-12 shadow-brutal-sm">
            <h3 className="font-bold uppercase text-lg mb-2 flex items-center gap-2">
              <Terminal size={20} /> What We're Building
            </h3>
            <p className="text-sm mb-0">A script that searches your Gmail for emails with the subject "New Client Inquiry", extracts the body text, puts it into a Google Sheet, and marks the email as read.</p>
          </div>

          <h2 className="text-2xl font-black uppercase mb-4">Step 1: Prepare the Sheet</h2>
          <ol className="list-decimal pl-6 space-y-2 mb-8">
            <li>Create a new Google Sheet. Name it "Client Intake".</li>
            <li>In the first row, create headers: <strong>Date</strong>, <strong>From</strong>, <strong>Subject</strong>, <strong>Body</strong>.</li>
            <li>Go to <strong>Extensions</strong> &gt; <strong>Apps Script</strong>.</li>
          </ol>

          <h2 className="text-2xl font-black uppercase mb-4">Step 2: The Script</h2>
          <p className="mb-4">
            Copy this code into the editor. I've added comments to explain every line.
          </p>

          <CodeBlock code={`function saveEmailsToSheet() {
  // 1. Get the active spreadsheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  
  // 2. Search Gmail for unread emails with specific subject
  // Modify "subject:Inquiry" to match whatever your clients use
  var threads = GmailApp.search('is:unread subject:"New Client Inquiry"');
  
  // 3. Loop through every email thread found
  for (var i = 0; i < threads.length; i++) {
    var messages = threads[i].getMessages();
    
    // Get the most recent message in the thread
    var message = messages[messages.length - 1];
    
    // 4. Extract data
    var date = message.getDate();
    var from = message.getFrom();
    var subject = message.getSubject();
    var body = message.getPlainBody(); // Text content without HTML
    
    // 5. Add row to sheet
    sheet.appendRow([date, from, subject, body]);
    
    // 6. Mark as read so we don't process it again
    message.markRead();
  }
  
  Logger.log("Processed " + threads.length + " emails.");
}`} />

          <h2 className="text-2xl font-black uppercase mb-4">Step 3: Test It</h2>
          <ol className="list-decimal pl-6 space-y-2 mb-8">
            <li>Send yourself an email with the subject <strong>"New Client Inquiry"</strong> and some body text like "I need help with a trademark."</li>
            <li>Wait a moment for it to arrive. Keep it <strong>unread</strong>.</li>
            <li>Go back to your script editor. Run the <code>saveEmailsToSheet</code> function.</li>
            <li>Grant permissions when asked.</li>
            <li>Check your Google Sheet. The data should appear instantly!</li>
          </ol>

          <div className="bg-brand-teal/10 border-l-4 border-brand-teal p-4 mb-8">
             <strong>Tip:</strong> If it didn't work, make sure the email is unread and the subject matches exactly what is in the code (case sensitive).
          </div>

          <h2 className="text-2xl font-black uppercase mb-4">Step 4: Automate It (Triggers)</h2>
          <p className="mb-4">
            You don't want to press "Run" manually every time. Let's make Google run this automatically every hour.
          </p>
          <ol className="list-decimal pl-6 space-y-2 mb-8">
            <li>In the Apps Script sidebar (left), click the <strong>Alarm Clock</strong> icon (Triggers).</li>
            <li>Click <strong>+ Add Trigger</strong> (bottom right).</li>
            <li>Set the settings:
               <ul className="list-disc pl-6 mt-2 text-sm">
                  <li>Function: <code>saveEmailsToSheet</code></li>
                  <li>Event Source: <strong>Time-driven</strong></li>
                  <li>Type: <strong>Hour timer</strong></li>
                  <li>Interval: <strong>Every hour</strong></li>
               </ul>
            </li>
            <li>Click Save.</li>
          </ol>

          <h2 className="text-2xl font-black uppercase mt-12 mb-4">The Impact</h2>
          <p className="mb-4">
            Congratulations. You just built a CRM.
          </p>
          <p className="mb-8">
            Every morning, instead of digging through your inbox, you can open your spreadsheet and see a neat list of all new leads. You can add columns for "Status", "Notes", or "Assigned Attorney".
          </p>

          <div className="bg-brand-gray dark:bg-zinc-900 border-2 border-black dark:border-white p-6 text-center shadow-brutal-sm">
            <h3 className="font-black uppercase text-xl mb-2">Want to generate documents from this data?</h3>
            <p className="font-mono text-sm mb-4">Learn how to auto-fill a Trademark Application using data from a Sheet.</p>
            <Link to="/tech/trademark-generator" className="inline-block px-6 py-2 bg-black text-white dark:bg-white dark:text-black font-bold uppercase hover:bg-brand-teal hover:border-brand-teal transition-colors border-2 border-black dark:border-white">
              Next Tutorial →
            </Link>
          </div>

        </article>
      </div>
    </div>
  );
};