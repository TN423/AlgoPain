class LRUCache {
    constructor(capacity) {
        this.cache = new Map()
        this.capacity = capacity;
    }
    
    // get(key) {
    //     if (this.cache.has())
    // }
    
    
    get (key) {
        if (!this.cache.has(key)) return -1
        var val = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key, val)
        return this.cache.get(key)
    }
    
    put (key, value){
        if (this.get(key)===-1) {
             if (this.capacity === this.cache.size) {
                for (var keyVal of this.cache) {

                    this.cache.delete(keyVal[0])
                    break
                }     
             }
        }
        this.cache.set(key, value)
       
    }
}