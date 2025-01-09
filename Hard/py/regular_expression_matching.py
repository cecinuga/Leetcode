import re
from lark import Lark, Transformer

grammar = r"""
    start   :          expr

    expr    :          factor+
    
    factor  :          atom "*" | atom

    atom    :          "." | TERM

    TERM    :          /[a-zA-Z]/ 

    
    %import common.WS      
    %ignore WS
"""

class NFA:
    def __init__(self):
        self.states = []
        self.transition = {}
        self.start_state = None
        self.accept_states = set()

    def add_state(self, accept=False):
        state_id = len(self.state)
        self.states.append(state_id)
        
        if accept:
            self.accept_states.add(state_id)
        return state_id
    
    def add_transition(self, from_state, symbol, to_state):
        self.transition.setdefault((from_state, symbol), []).append(to_state)
    
class DFA:
    def __init__(self):
        self.states = []  
        self.transitions = {}  
        self.start_state = None
        self.accept_states = set()

    def add_state(self, accept=False):
        state_id = len(self.states)
        self.states.append(state_id)

        if accept:
            self.accept_states.add(state_id)
        return state_id

    def is_accepting(self, state):
        return state in self.accept_states
    
    def add_transition(self, from_state, symbol, to_state):
        self.transitions[(from_state, symbol)] = to_state
    
    def simulate(self, string):
        current_state = self.start_state
        for char in string:
            if (current_state, char) in self.transitions:
                current_state = self.transitions[(current_state, char)]
            else:
                return False
            
        return current_state in self.accept_states

def epsilon_closure(nfa: NFA, states):
    stack = list(states)
    closure = set(states)

    while stack:
        state = stack.pop()
        for next_state in nfa.transition.get((state, ''), []):
            if next_state not in closure:
                closure.add(next_state)
                stack.append(next_state)
    return closure

def get_alphabet(nfa: NFA):
    """Ottiene l'alfabeto dell'NFA (esclude le epsilon-transizioni)."""
    symbols = set(symbol for (state, symbol) in nfa.transitions.keys() if symbol != '')
    return symbols

def to_deterministic(nfa: NFA):
    dfa = DFA()

    nfa_to_dfa_states = {}
    dfa_to_nfa_states = {}

    start_set = epsilon_closure(nfa, {nfa.start_state})
    start_state = dfa.add_state(accept=any(s in nfa.accept_states for s in start_set))
    nfa_to_dfa_states[frozenset(start_set)] = start_set
    dfa_to_nfa_states[start_set] = start_set

    to_process = [start_set]

    while to_process:
        current_set = to_process.pop()
        current_dfa_state = nfa_to_dfa_states[frozenset(current_set)]

        # Per ogni simbolo, calcola la transizione
        for symbol in get_alphabet(nfa):
            next_set = set()
            for state in current_set:
                if (state, symbol) in nfa.transitions:
                    next_set.update(nfa.transitions[(state, symbol)])

            # Esegui l'epsilon-closure
            next_set = epsilon_closure(nfa, next_set)

            if frozenset(next_set) not in nfa_to_dfa_states:
                # Nuovo stato del DFA
                new_state = dfa.add_state(accept=any(s in nfa.accept_states for s in next_set))
                nfa_to_dfa_states[frozenset(next_set)] = new_state
                dfa_to_nfa_states[new_state] = next_set
                to_process.append(next_set)

            # Aggiungi la transizione
            dfa.add_transition(current_dfa_state, symbol, nfa_to_dfa_states[frozenset(next_set)])

    # Imposta lo stato iniziale del DFA
    dfa.start_state = start_state

    return dfa

class RegexInterpreter(Transformer):
    """
        RegexInterpreter class, methods are the semantics function.
    """
    def __init__(self):
        super().__init__()
        self.nfa = NFA()
    
class Solution():    
    def __init__(self):
        self.parser = Lark(grammar, parser="lalr")

    def isMatch(self, s: str, p: str) -> bool:
        nfa = self.parser.parse(p)
        nfa.si
        #return language(s)
        
    
string = 'abcdhbbcceeebbaee'
pattern = '.*.b*c*...bbae*'

solution = Solution()
print(solution.isMatch(str, pattern))



