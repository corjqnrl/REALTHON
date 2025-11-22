"""
Run the workflow to process document folder and save to ChromaDB
Processes all courses in the document folder structure with reviews and syllabi.
Creates one embedding per course ID by combining all reviews and syllabi.
"""
from embeddocument import process_document_folder

print("=" * 60)
print("Processing Document Folder")
print("=" * 60)
print("This will process all courses in the document folder:")
print("  - Each folder name is a course ID (e.g., COSE33100)")
print("  - Combines all reviews from each course's reviews/ folder")
print("  - Combines all syllabi from each course's syllabus/ folder")
print("  - Includes course_profile.txt for contextual embeddings")
print("  - Creates ONE embedding per course ID")
print("=" * 60)

try:
    # Process document folder
    # This creates a single "courses" collection with one embedding per course ID
    process_document_folder(
        document_folder="document",
        model="text-embedding-ada-002",
        persist_directory="./chroma_db"
    )
    
except Exception as e:
    print(f"\n❌ Error processing document folder: {e}")
    import traceback
    traceback.print_exc()

print("\n" + "=" * 60)
print("✅ Workflow completed!")
print("=" * 60)