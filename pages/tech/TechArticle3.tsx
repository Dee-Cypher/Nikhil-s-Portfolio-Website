import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Copy, Check, ArrowLeft, FileText, Download } from 'lucide-react';
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

export const TechArticle3: React.FC = () => {
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
            Advanced Project
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase leading-none mb-6">
            Trademark Generator: <br/><span className="text-brand-amber">Docs from Data</span>
          </h1>
          <p className="font-mono text-lg text-gray-600 dark:text-gray-400">
            This script saved me ~100 hours last year. It takes a row of client data and generates a perfectly formatted Trademark Application Word doc.
          </p>
        </div>

        {/* Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none font-mono">
          
          <div className="bg-brand-gray dark:bg-zinc-900 border-2 border-black dark:border-white p-6 mb-12 shadow-brutal-sm">
            <h3 className="font-bold uppercase text-lg mb-2 flex items-center gap-2">
              <FileText size={20} /> The Strategy
            </h3>
            <p className="text-sm mb-0">We will use a <strong>Google Doc Template</strong> with placeholders like <code>{`{{ClientName}}`}</code> and use Apps Script to create copies of that template, replacing the placeholders with real data from a Sheet.</p>
          </div>

          <h2 className="text-2xl font-black uppercase mb-4">Step 1: Create the Template</h2>
          <ol className="list-decimal pl-6 space-y-2 mb-8">
            <li>Create a Google Doc. Name it "TM-Application-Template".</li>
            <li>Paste your standard trademark application text.</li>
            <li>Replace the specific details with these placeholders:
               <ul className="list-disc pl-6 mt-2 text-sm font-bold">
                  <li>{`{{ClientName}}`}</li>
                  <li>{`{{Address}}`}</li>
                  <li>{`{{MarkName}}`}</li>
                  <li>{`{{ClassNumber}}`}</li>
                  <li>{`{{GoodsDescription}}`}</li>
               </ul>
            </li>
          </ol>

          <h2 className="text-2xl font-black uppercase mb-4">Step 2: Prepare the Data</h2>
          <p className="mb-4">Create a Google Sheet with headers matching your placeholders (ClientName, Address, etc.). Fill in one row of dummy data.</p>
          <div className="bg-yellow-100 dark:bg-yellow-900/30 border-l-4 border-brand-amber p-4 mb-8 text-sm">
             <strong>Critical:</strong> Note the ID of your Template Doc and the ID of your target Folder where you want the new files to go. The ID is the long string of random characters in the URL.
          </div>

          <h2 className="text-2xl font-black uppercase mb-4">Step 3: The Generator Script</h2>
          <p className="mb-4">
            Go to <strong>Extensions &gt; Apps Script</strong> in your Sheet and paste this code. Replace the IDs at the top with yours.
          </p>

          <CodeBlock code={`function createTrademarkDocs() {
  // --- CONFIGURATION ---
  var TEMPLATE_ID = 'YOUR_TEMPLATE_DOC_ID_HERE'; 
  var DESTINATION_FOLDER_ID = 'YOUR_FOLDER_ID_HERE';
  
  // --- SETUP ---
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var rows = sheet.getDataRange().getValues();
  var folder = DriveApp.getFolderById(DESTINATION_FOLDER_ID);
  var templateFile = DriveApp.getFileById(TEMPLATE_ID);
  
  // Start loop from row 1 (skipping header row 0)
  for (var i = 1; i < rows.length; i++) {
    var row = rows[i];
    
    // Check if doc is already created (assume last column 'Status')
    var status = row[5]; 
    if (status === 'Generated') continue; 
    
    // Map columns to variables (Adjust indices based on your sheet)
    var clientName = row[0];
    var address = row[1];
    var markName = row[2];
    var classNum = row[3];
    var description = row[4];
    
    // 1. Make a copy of the template
    var newFileName = 'TM App - ' + markName + ' - ' + clientName;
    var newFile = templateFile.makeCopy(newFileName, folder);
    var newDoc = DocumentApp.openById(newFile.getId());
    var body = newDoc.getBody();
    
    // 2. Replace placeholders
    body.replaceText('{{ClientName}}', clientName);
    body.replaceText('{{Address}}', address);
    body.replaceText('{{MarkName}}', markName);
    body.replaceText('{{ClassNumber}}', classNum);
    body.replaceText('{{GoodsDescription}}', description);
    
    // 3. Save and Close
    newDoc.saveAndClose();
    
    // 4. Update Status in Sheet to avoid duplicate generation
    sheet.getRange(i + 1, 6).setValue('Generated');
    sheet.getRange(i + 1, 7).setValue(newFile.getUrl()); // Add link
  }
}`} />

          <h2 className="text-2xl font-black uppercase mb-4">Step 4: Run & Verify</h2>
          <ol className="list-decimal pl-6 space-y-2 mb-8">
            <li>Run the <code>createTrademarkDocs</code> function.</li>
            <li>Authorize permissions (Drive and Sheets access).</li>
            <li>Check your specific Google Drive folder. You should see a new file named <strong>"TM App - [Mark] - [Client]"</strong>.</li>
            <li>Open it. All placeholders should be replaced with real data.</li>
            <li>Check your Sheet. The "Status" column should say "Generated" and have a link.</li>
          </ol>

          <h2 className="text-2xl font-black uppercase mt-12 mb-4">Scaling Up</h2>
          <p className="mb-4">
            This script is a game changer. I use this logic to generate:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li><strong>Engagement Letters:</strong> Automatically sent when a client says "Yes".</li>
            <li><strong>Invoices:</strong> Generated from hours tracked in a spreadsheet.</li>
            <li><strong>Opposition Notices:</strong> Boilerplate legal filings that just need specific fact swaps.</li>
          </ul>

          <div className="p-8 border-2 border-black bg-brand-teal text-white shadow-brutal text-center">
             <h3 className="font-black uppercase text-2xl mb-2">Want the full code?</h3>
             <p className="font-mono text-sm mb-6">I have a GitHub repository with more advanced versions of these scripts (including error handling and email sending).</p>
             <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold uppercase hover:bg-black hover:text-white transition-colors border-2 border-black">
                <Download size={18} /> Download Repo
             </button>
          </div>

        </article>
      </div>
    </div>
  );
};