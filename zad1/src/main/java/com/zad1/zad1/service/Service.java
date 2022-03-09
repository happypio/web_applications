package com.zad1.zad1.service;

import org.springframework.web.bind.annotation.*;

import java.util.*;

class Status {
    public int count;
    public String status;
    public Status(int c, String status){
        this.count = c;
        this.status = status;
    }
}

@RestController
public class Service {
    private static Users users_db = new Users();

    @PostMapping("/register")
    public Status register(@RequestParam(required = false) String name){
        if (name == null) {
            return new Status(0, "ERROR - no name passed!");
        }
        return new Status(this.users_db.get_counter(name), "OK");
    }

    @DeleteMapping("/delete")
    public void delete(@RequestParam(required = false) String name){
        this.users_db.remove_name(name);
    }

    private Map<String, Integer> sortByValue(Map<String, Integer> map) {
        List<Map.Entry<String, Integer>> list = new ArrayList<>(map.entrySet());
        list.sort(Map.Entry.comparingByValue());
        Collections.reverse(list);

        Map<String, Integer> result = new LinkedHashMap<String, Integer>();
        for (Map.Entry<String, Integer> entry : list) {
            result.put(entry.getKey(), entry.getValue());
        }

        return result;
    }

    private Map<String, Integer> getRecords(int n) {
        Map<String,Integer> result = new LinkedHashMap<String, Integer>();
        Map<String, Integer> sorted_records = sortByValue(this.users_db.dict);
        int i = 0;
        for (Map.Entry<String, Integer> entry : sorted_records.entrySet()) {
            i++;
            result.put(entry.getKey(), entry.getValue());
            if (i >= n) {
                break;
            }
        }
        return result;
    }

    private Map<String, Integer> getRecordsIC() {
        Map<String,Integer> result = new LinkedHashMap<String, Integer>();
        Map<String, Integer> sorted_records = sortByValue(this.users_db.dict);

        for (Map.Entry<String, Integer> entry : sorted_records.entrySet()) {
            String key = entry.getKey().toLowerCase();
            if (result.containsKey(key)) {
                int old_v = result.get(key);
                result.replace(key,old_v + entry.getValue());
            } else {
                result.put(key, entry.getValue());
            }
        }
        return sortByValue(result);
    }

    @GetMapping("/stats")
    public Map<String,Integer> stats(@RequestParam(required = false) String mode){
        if (mode == null) {
            return getRecords(3);
        }
        if (mode.equals("ALL")) {
            return getRecords(Integer.MAX_VALUE);
        }
        if (mode.equals("IGNORE_CASE")) {
            return getRecordsIC();
        }
        return null;
    }

}
