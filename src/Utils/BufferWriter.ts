export class BufferWriter {
    private data: Buffer;
    private pos = 0;

    constructor(size: number) {
        this.data = Buffer.alloc(size);
    }

    public write(value: number, len: number, signed: boolean) {
        let val;
        if(signed) {
            val = this.data.writeUIntLE(value, this.pos, len);
        }
        else {
            val = this.data.writeIntLE(value, this.pos, len);
        }
        this.pos += len;
        return val;
    }

    public writeString(value: string) {
        this.data.write(value, this.pos);
        this.pos += value.length;
    }

    public get() { return this.data };
}