"""
RAG Pipeline - Step 1: Query → Embedding
Converts text into embedding vectors for vector database search.
"""

import os
from typing import List
from openai import OpenAI

# Try to import from config file, fallback to environment variable
try:
    import config
    _default_api_key = getattr(config, 'OPENAI_API_KEY', None)
except (ImportError, AttributeError):
    _default_api_key = None


def embedding(
    text: str,
    model: str = "text-embedding-ada-002"
) -> List[float]:
    """
    Convert text into an embedding vector using OpenAI.
    
    Args:
        text: The text to convert (e.g., "Explain Fourier series simply")
        model: The OpenAI embedding model to use
            - "text-embedding-ada-002" (default, 1536 dimensions)
            - "text-embedding-3-small" (1536 dimensions)
            - "text-embedding-3-large" (3072 dimensions)
    
    Returns:
        List of floats representing the embedding vector
    
    Example:
        >>> embedding_vector = embedding("Explain Fourier series simply")
        >>> print(len(embedding_vector))  # e.g., 1536 for ada-002
    """
    # Try config file first, then environment variable
    api_key = _default_api_key or os.getenv("OPENAI_API_KEY")
    if not api_key:
        raise ValueError("OPENAI_API_KEY not found in config file or environment variable")
    
    client = OpenAI(api_key=api_key)
    
    response = client.embeddings.create(
        model=model,
        input=text
    )
    
    return response.data[0].embedding


if __name__ == "__main__":
    # Example usage
    text = "Explain Fourier series simply"
    
    embedding_vector = embedding(text, model="text-embedding-ada-002")
    print(f"Embedding dimension: {len(embedding_vector)}")
    print(f"First 5 values: {embedding_vector[:5]}")

