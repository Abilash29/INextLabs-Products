import { NextRequest, NextResponse } from 'next/server';

// Mock responses for different types of queries
const mockResponses = {
  greeting: [
    "Hello! I'm your AI assistant. How can I help you today?",
    "Hi there! I'm here to assist you with any questions or tasks you might have.",
    "Welcome! I'm your AI assistant, ready to help you with whatever you need."
  ],
  help: [
    "I can help you with a variety of tasks including document processing, data analysis, customer support, and more. What specific area do you need assistance with?",
    "I'm here to help! I can assist with AI-powered solutions, technical questions, product information, and general support. What would you like to know?",
    "I'm your AI assistant and I'm here to help! I can provide information about our products, help with technical issues, or answer any questions you might have."
  ],
  products: [
    "We offer four main AI products: inFlow DocsAI for document processing, inFlow InsightsAI for data analysis, inFlow EngageAI for data visualization, and inFlow AssistAI for customer support. Which one interests you?",
    "Our AI product suite includes document processing, data analytics, visualization tools, and customer support solutions. Each product is designed to transform specific business operations. Which area would you like to learn more about?",
    "We have a comprehensive AI product line covering document management, data insights, visual analytics, and customer engagement. I'd be happy to provide detailed information about any of these solutions."
  ],
  pricing: [
    "Our pricing varies based on your specific needs and usage requirements. We offer flexible plans starting from $99/month. Would you like me to connect you with our sales team for a personalized quote?",
    "We have several pricing tiers to accommodate different business sizes and needs. Our plans start at $99/month and include enterprise options. I can help you find the right plan for your organization.",
    "Pricing depends on your specific requirements and usage. We offer competitive rates starting from $99/month with volume discounts available. Would you like to discuss your specific needs?"
  ],
  default: [
    "That's an interesting question! Let me help you with that. Our AI solutions are designed to address various business challenges. Could you provide more details about what you're looking for?",
    "I understand you're asking about that topic. Our AI platform offers comprehensive solutions for modern business needs. What specific aspect would you like to explore further?",
    "Great question! Our AI technology is built to handle complex business requirements. I'd be happy to provide more detailed information about how we can help with your specific needs."
  ]
};

function getResponseCategory(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    return 'greeting';
  }
  if (lowerMessage.includes('help') || lowerMessage.includes('assist') || lowerMessage.includes('support')) {
    return 'help';
  }
  if (lowerMessage.includes('product') || lowerMessage.includes('solution') || lowerMessage.includes('service')) {
    return 'products';
  }
  if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('plan')) {
    return 'pricing';
  }
  
  return 'default';
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { message } = body;

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    const category = getResponseCategory(message);
    const responses = mockResponses[category as keyof typeof mockResponses] || mockResponses.default;
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];

    return NextResponse.json({
      success: true,
      message: randomResponse,
      timestamp: new Date().toISOString(),
      category: category
    });

  } catch (error) {
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to process message',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Chat API is running",
    timestamp: new Date().toISOString(),
    endpoints: {
      POST: "/api/chat - Send a message",
      GET: "/api/chat - Health check"
    }
  });
}
