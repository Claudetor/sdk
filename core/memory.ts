export interface MemoryRecord {
  id: string;
  timestamp: number;
  content: string;
}

export class MemoryStore {
  private records: MemoryRecord[] = [];

  add(content: string) {
    this.records.push({
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      content
    });
  }

  getAll() {
    return this.records;
  }
}
