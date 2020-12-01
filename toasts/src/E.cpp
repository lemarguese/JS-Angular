#include <bits/stdc++.h> 
using namespace std; 
  
vector<int> compute_lps(string s) 
{ 
    int n = s.size(); 
    vector<int> lps(n); 
  
    int len = 0; 
  
    lps[0] = 0; 
    int i = 1; 
  
    while (i < n) { 
        if (s[i] == s[len]) { 
            len++; 
            lps[i] = len; 
            i++; 
        }   
        else { 
            if (len != 0) 
                len = lps[len - 1]; 
            else { 
                lps[i] = 0; 
                i++; 
            } 
        } 
    } 
  
    return lps; 
} 
  
void Longestsubstring(string s) 
{ 
    vector<int> lps = compute_lps(s); 
    int n = s.size(); 
  
    if (lps[n - 1] == 0) { 
        cout << -1; 
        return; 
    } 
  
    for (int i = 0; i < n - 1; i++) { 
  
        if (lps[i] == lps[n - 1]) { 
            cout << s.substr(0, lps[i]); 
            return; 
        } 
    } 
  
    if (lps[lps[n - 1] - 1] == 0) {
        cout << "Just a legend";
    }
    else {
        cout << s.substr(0, lps[lps[n - 1] - 1]); 
    }
} 
  
int main() 
{ 
    string s;
    cin >> s; 
    Longestsubstring(s);
    return 0; 
} 