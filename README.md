BASE AI CHAT (Web3 Agent)

Base AI Chat is a lightweight Web3 + AI browser application that enables users to connect wallets, send ETH and USDC on the Base network, manage saved addresses, track transactions locally, and interact with an AI backend through a simple chat interface.

🚀 Features
Wallet Integration
Connect MetaMask or Coinbase Wallet (EIP-1193 compatible wallets)
Display connected wallet address
Fetch and display ETH balance
Fetch and display USDC balance on Base network
Transfers
Send ETH directly from connected wallet
Send USDC via ERC-20 contract transfer
Transaction confirmation using await tx.wait()
Address Book
Save frequently used addresses locally in the browser
Store name and address pairs
Copy addresses to clipboard
Persistent storage using localStorage
Transaction History
Store ETH and USDC transactions locally
Display transaction type, amount, and hash
Show newest transactions first
AI Chat
Simple chat interface
Sends user messages to backend API (/chat)
Displays AI-generated responses in UI
🧠 Architecture

Frontend:

HTML, CSS, JavaScript
ethers.js for blockchain interaction
localStorage for persistence

Blockchain:

Base network (Ethereum Layer 2)
ETH transfers via native signer
USDC transfers via ERC-20 contract

Backend:

Optional AI server running on http://localhost:3001/chat
📁 Project Structure
BASE-AI-CHAT/
│
├── index.html      # Full application (UI + logic)
└── README.md       # Documentation
⚙️ Setup Instructions
Run the application

Open directly in browser:

index.html

Or use a local server:

npx serve .
🤖 AI Backend (Required for Chat Feature)

The AI chat feature requires a backend server running at:

POST http://localhost:3001/chat
Request
{
  "message": "Hello"
}
Response
{
  "reply": "AI response text"
}
🔌 Wallet Connection
const accounts = await window.ethereum.request({
  method: "eth_requestAccounts"
});
Uses injected wallet provider (MetaMask / Coinbase Wallet)
Stores current account in memory
Fetches ETH and USDC balances
💸 ETH Transfer
await signer.sendTransaction({
  to: recipientAddress,
  value: ethers.utils.parseEther(amount)
});
💸 USDC Transfer (Base Network)
const USDC_ADDRESS = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";
await contract.transfer(
  recipientAddress,
  ethers.utils.parseUnits(amount, 6)
);
📒 Address Book

Stored in:

localStorage key: addressBook

Example:

[
  {
    "name": "Friend",
    "address": "0x123..."
  }
]
📜 Transaction History

Stored in:

localStorage key: txHistory

Example:

[
  {
    "type": "ETH",
    "amount": "0.01",
    "hash": "0xabc..."
  }
]
🤖 AI Chat Flow

Frontend sends:

fetch("http://localhost:3001/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message })
});

Backend returns:

{
  "reply": "AI response text"
}
⚠️ Requirements
MetaMask or Coinbase Wallet
Base network configured
Local AI backend (for chat)
Internet access for ethers.js CDN
🛠 Tech Stack
HTML / CSS / JavaScript
ethers.js v5.7.2
Base L2 network
localStorage
EIP-1193 wallet standard
📈 Future Improvements
AI-driven transaction intent execution
Multi-token support
On-chain indexing dashboard
Wallet auto reconnect
React/Vue refactor
Secure transaction confirmation layer
📄 License

MIT License
