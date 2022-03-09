package com.zad1.zad1.service;

import java.util.HashMap;
import java.util.Map;

public class Users {
    public Map<String, Integer> dict;

    public Users() {
        this.dict = new HashMap<String, Integer>();
    }
    public Integer get_counter(String name) {
        if (this.dict.containsKey(name)) {
            int old_v = this.dict.get(name);
            return this.dict.replace(name, old_v + 1);
        } else {
            this.dict.put(name, 1);
            return 0;
        }
    }

    public void remove_name(String name) {
        this.dict.remove(name);
    }
}
